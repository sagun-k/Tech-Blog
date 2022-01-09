// import React,{useEffect,useState} from 'react';
// import axios from 'axios'
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import BlogDetail from "./components/BlogDetail"
import BlogList from "./components/BlogList"
import BlogCategory from "./components/BlogCategory"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="overflow-x-hidden w-full">
    <Router>
       <div>
               <NavBar/>
              
           </div>
     
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/blog/:id" element={<BlogDetail/>} />
      <Route exact path="/blog" element={<BlogList/>} />
      <Route exact path="/blog/category/:id" element={<BlogCategory/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
