import { Link } from "react-router-dom"
import { initialState ,timeAns } from "../assets/data";
import { resultstate } from "../assets/resultstate";
import { useEffect, useState } from "react";


function Home() {
  
  const [questionsByCategory ,setQuestionsByCategory] =useState(initialState);
  const [category, setCategory] = useState("all");
  const handleChangeCategory = (e) =>{
    setCategory(e.target.value)
  }
  useEffect(() => {
    if (category ==="all") {
      setQuestionsByCategory(initialState)
    } else {
      setQuestionsByCategory(initialState.filter(question => question.category === category))
    }
  }, [category]);

  function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60); // Obtient le nombre entier de minutes
    const remainingSeconds = seconds % 60; // Obtient le nombre de secondes restantes
  
    return minutes > 0 ?  remainingSeconds === 0 ? `${minutes} minute(s) ` : `${minutes} minute(s) et ${remainingSeconds} seconde(s)` :` ${remainingSeconds} seconde(s)`;
  }

  const duration = convertSecondsToMinutes(questionsByCategory.length * timeAns);

  return (

    <div className="container h-96 mt-36 mx-auto w-11/12  items-center gap-3 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
      <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24" />
      <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12" />
      <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12" />
      <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12" />
      <div className="z-10 flex flex-col justify-evenly w-full h-full">
        <div className=" w-full">
          <h1 className="text-balance text-2xl text-center">Bienvenue {resultstate.userName} sur notre application de gestion de quiz pour développeurs !</h1> 
          <p className="text-balance text-center">Découvrez et testez vos connaissances en JavaScript avec notre collection de questions.</p>
        </div>
        <div className=" w-full ">
          <h2 className="text-balance text-xl">Règles du Quiz :</h2>
          <ul className="list-none p-5">
          <li>
              <div className="relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
                <svg y={0} xmlns="http://www.w3.org/2000/svg" x={0} width={100} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height={100} className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300">
                  <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" fill="none" d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z" className="svg-stroke-primary" />
                </svg>
                <select value={category} onChange={handleChangeCategory} className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500  placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5">
                  <option value="all">All</option>
                  <option value="frontend">frontend</option>
                  <option value="backend">backend</option>
                  <option value="fullstack">fullstack</option>
                </select>
              </div>
            </li>
            <li>ce quiz va prendre une duration de {duration} </li>
            <li>vous n avez que {timeAns} second pour chaque quetions.</li>
            <li>Le quiz comporte une série de questions à choix multiples.</li>
            <li>Chaque question a une seule réponse correcte parmi plusieurs options.</li>
            <li>Vous aurez un score à la fin en fonction de vos réponses correctes.</li>
            <li>Cliquez sur le bouton Commencer le Quiz pour démarrer.</li>
          </ul>
        </div>
        <div className=" w-full text-center mt-5">
          <Link to="/quizz" state={ {data1 : questionsByCategory}} className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3">
            Commencer le Quiz
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home

