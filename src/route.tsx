import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import Login from "./Pages/Login";

export interface IComponentsProps{}

const RoutesComponets: React.FunctionComponent<IComponentsProps> = () => {
   return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element = { <HomePage/> }/>
           <Route path="/Login" element = { <Login/> }/>
      </Routes>
       </BrowserRouter>
   )
}

export default RoutesComponets;