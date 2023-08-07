import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./page/Home";
import { Login } from "./page/Login";
import { Signup } from "./page/Signup";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
      </Routes>    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
