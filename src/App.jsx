import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Quizz from "./components/Quizz";
import Login from "./components/Login";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/quizz" element={<Quizz/>} />
        <Route path="*" element={<h1>page not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>

  )
}



