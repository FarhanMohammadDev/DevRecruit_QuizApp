import { useEffect, useState } from "react";
import { timeAns} from "../assets/data";
import { resultstate } from "../assets/resultstate";
import { useLocation } from "react-router-dom";
import './quizz.css'

export default function Quizz() {
  const [isLoading, setIsLoading] = useState(true);
  const location =useLocation();
  console.log(location.state.data1);
  const [data, setData] = useState(location.state.data1);
  
  useEffect(() => {
    setTimeout(() => {
      if (location.state && location.state.data1) {
        setData(location.state.data1);
        setIsLoading(false)
      }
    }, 2000); // Simulating a 2-second delay using setTimeout
  }, [location.state]);


  
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  // -----------------------------------------------------------------------
  let [answer, setAnswer] = useState(null);
  let [answersBackend, setAnswersBackend] = useState(null);
  let [answersFrontend, setAnswersFrontend] = useState(null);
  let [answersFullstack, setAnswersFullstack] = useState(null);
  // ------------------------------------------------------------------------
  let [result, setResult] = useState(false);
  let [resultdata, setResultdata] = useState(resultstate);
  // console.log(resultdata);
  // ------------------------------------------------------------
  // const categories = ['frontend', 'backend', 'fullstack']; 
  function getQuestionsByCategory(category) {
    const questionsByCategory = data.filter(question => question.category === category);
    return questionsByCategory;
  }
  
  const categoryFrontend = getQuestionsByCategory('frontend');
  const categoryBackend = getQuestionsByCategory('backend');
  const categoryFullstack = getQuestionsByCategory('fullstack');
  
  const score = (resultdata.score *100 / data.length).toFixed(2);
  const scoreFrontend = (resultdata.correctAnswersFrontend *100 / categoryFrontend.length).toFixed(2);
  const scoreBackend = (resultdata.correctAnswersBackend *100 / categoryBackend.length).toFixed(2);
  const scoreFullstack = (resultdata.correctAnswersFullstack *100 / categoryFullstack.length).toFixed(2);

  // ------------------------------------------------------------
  const [count, setCount] = useState(timeAns);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount - 1;
        if (newCount === 0) {
          if (index !== data.length - 1) {
            setIndex(++index);
          } else if (data.length - 1 === index) {
            setResult(true);
          }
          setQuestion(data[index]);
          clearInterval(interval);
        }
        return newCount === 0 ? timeAns : newCount;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  // ------------------------------------------------------------
  const [timer, setTimer] = useState(0);
  function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60); 
    const remainingSeconds = seconds % 60; 
  
    return minutes > 0 ? `${minutes} minute(s) et ${remainingSeconds} seconde(s)` :` ${remainingSeconds} seconde(s)`;
  }
  const duration = convertSecondsToMinutes(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); 


  // ------------------------------------------------------------
  const checkAnswer = (event, ans) => {
    if (question.ans === ans) {
      setAnswer(true)
      console.log(answer);
      question.category === "frontend" ? setAnswersFrontend(true) : setAnswersFrontend(false);
      question.category === "backend" ? setAnswersBackend(true) : setAnswersBackend(false);
      question.category === "fullstack" ? setAnswersFullstack(true) : setAnswersFullstack(false);
    } else {
      setAnswer(false);
      setAnswersFrontend(false);
      setAnswersBackend(false);
      setAnswersFullstack(false)
      console.log(answer);
    }
  };

  const next = () => {
    console.log(answersFrontend);
    console.log(answersBackend);
    console.log(answersFullstack);
    setResultdata((prev) => answer ?
      {
        ...prev,
        score: prev.score + 1,
        correctAnswers: prev.correctAnswers + 1
      }
      :
      {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }
    )

    setResultdata((prev) => answersBackend ? { ...prev, correctAnswersBackend: prev.correctAnswersBackend + 1 } : { ...prev });
    setResultdata((prev) => answersFrontend ? { ...prev, correctAnswersFrontend: prev.correctAnswersFrontend + 1 } : { ...prev });
    setResultdata((prev) => answersFullstack ? { ...prev, correctAnswersFullstack: prev.correctAnswersFullstack + 1 } : { ...prev });

    console.log(answersFrontend);
    console.log(answersBackend);
    console.log(answersFullstack);
    console.log(resultdata);

    if (index !== data.length - 1) {
      setIndex(++index);
    } else if (data.length - 1 === index) {
      setResult(true);
      setResultdata((prev) => duration && {...prev , timeTaken : duration});
    }
    setQuestion(data[index]);
    setCount(timeAns)
  };

  const logOut = () => {
    setResultdata(resultstate);
    setResult(false);
    setIndex(0);
    setTimer(0);
    window.location.href ="/";
  }
  return (
    <>
    {
      isLoading ?  
      <div className="container  h-96 mt-36 mx-auto p-5 w-11/12 flex flex-col justify-center items-center gap-3 drop-shadow-2xl rounded-lg text-center">
      
        <div className="loader">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
          <div className="circle circle-4" />
        </div>
      </div>
      :
    
      result ? (
        // ---------------------------------------------------<Result >----------------------------------------------------
        <>
          <div className="container  h-96 mt-36 mx-auto p-5 w-11/12 flex flex-col justify-center items-center gap-3 drop-shadow-2xl rounded-lg text-center">

            <div className=" w-full">
              <h1 className="text-balance text-2xl"> Congratulations. You passed! 🎉</h1>
              <p className="text-balance">Découvrez et testez vos connaissances en JavaScript avec notre collection de questions.</p>
            </div>

            <div className=" w-full ">
              <h2 className="text-balance text-xl">Resultat :</h2>
              <div className="grid grid-cols-4 gap-4">
          
              </div>
              <ul className="p-10 list-none">
                <li>Time Taken: {resultdata.timeTaken}  </li>
                <li>Total Correct Answers: {resultdata.correctAnswers} | Your Score: {score} %</li>
                { resultdata.correctAnswersFrontend ? <li>Correct Answers Frontend : {resultdata.correctAnswersFrontend} | Your Score: {scoreFrontend} % </li> : "" }
                { resultdata.correctAnswersBackend ? <li>Correct Answers Backend : {resultdata.correctAnswersBackend} | Your Score: {scoreBackend} % </li> : "" }
                {resultdata.correctAnswersFullstack ? <li>Correct Answers Fullstack : {resultdata.correctAnswersFullstack} | Your Score: {scoreFullstack} % </li> : "" }
                
                <li>Total Wrong Answers: {resultdata.wrongAnswers}  </li>
              </ul>
            </div>

            <div className=" w-full mt-5">
              <button
                onClick={logOut}
                className=" p-5 rounded-lg hover:bg-blue-500  active:bg-blue-700  focus:outline-none focus:ring focus:bg-blue-500 bg-white drop-shadow-lg"
                >
                Log out
                </button>
            </div>
          </div>
        </>
        // --------------------------------------------------- </Result> ----------------------------------------------------

      ) : (
        // ---------------------------------------------------<Quizz >----------------------------------------------------
        <>
          <div className="container mx-auto p-3 w-9/12 m-10  flex flex-col rounded-lg">
            <div>
              <div className="mx-auto grid grid-cols-5 gap-4 place-content-center h-28 rounded-lg">
                <div className="drop-shadow-lg p-5 bg-gray-300 rounded-lg col-span-2">
                  {question.category} / Question No.{index + 1} of {data.length}
                </div>
                <div className="drop-shadow-lg p-5 bg-orange-300 rounded-full font-bold text-center">
                  <h2>00 : {count > 9 ? count : "0" + count}</h2>
                </div>
                <div className="drop-shadow-lg p-5 bg-gray-300 text-right rounded-lg col-span-2">
                 {duration}
                </div>
              </div>
            </div>
            <div className="drop-shadow-2xl rounded-lg  p-5 bg-white h-24 flex items-center font-bold">
              Q {index + 1}. {question.question}
            </div>
            <div className="p-3 text-center">
              Please choose one of the following answers:
            </div>
            <div>
              <div className="mx-auto grid grid-cols-2 gap-4 place-content-center h-48">
                {
                  question.options.map((option, index) =>
                    <div className="bg-white drop-shadow-lg  rounded-lg" key={index}>
                      <button
                        key={index}
                        onClick={(e) => {
                          checkAnswer(e, option);
                        }}
                        className="w-full h-full p-5 rounded-lg hover:bg-orange-300 active:bg-orange-400 focus:outline-none focus:ring focus:ring-violet-300 "
                      >
                        {option}
                      </button>
                    </div>
                  )
                }

              </div>
            </div>
            <div className="flex justify-end ">
              <button

                onClick={next}
                className="w-3/12 h-full p-5 rounded-lg hover:bg-orange-300  active:bg-orange-400  focus:outline-none focus:ring focus:ring-violet-300 bg-white drop-shadow-lg"
              >
                {data.length - 1 === index ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </>
      )
    }
    </>
    // ---------------------------------------------------</Quizz>----------------------------------------------------
  );
}
