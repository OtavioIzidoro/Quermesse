import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Admin/Profile";
import CreateUser from "./Pages/CreateUser/CreateUser";

import HomePage from "./Pages/homePage";
import Login from "./Pages/Login";



export interface IComponentsProps{}

const RoutesComponets: React.FunctionComponent<IComponentsProps> = () => {
   return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element = { <HomePage/> }/>
           <Route path="/Login" element = { <Login/> }/>
           <Route path="/Createuser" element = {<CreateUser/>} />
           <Route path="/Profile" element = {<Profile/>} />
      </Routes>
       </BrowserRouter>
   )
}

export default RoutesComponets;