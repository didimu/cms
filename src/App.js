import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./page/Home";
import { Login } from "./page/Login";
import { Signup } from "./page/Signup";

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Login" element = {<Login/>}/>
        <Route path="/Signup" element = {<Signup/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
