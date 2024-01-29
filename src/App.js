import React from "react";
import Appbar from "./components/Appbar";
import { Profile } from "./components/Profile";
import Data from "./components/Data";
import Myprofile from "./components/Myprofile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
 

function App(){

return(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Myprofile/>}/>
      <Route path="/porfile/:id" element={<Myprofile/>}/>
    </Routes>
    </BrowserRouter>





    {/* <Appbar/>
    <Profile />
    <Data/>
    <Myprofile/> */}
   
  </>
)
}
export default App