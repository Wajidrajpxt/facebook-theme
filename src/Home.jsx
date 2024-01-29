import React from "react";
import Appbar from "./components/Appbar";
import { Profile } from "./components/Profile";
// import Myprofile from "./components/Myprofile";

const Home = () => {
  return (
    <div>
      <Appbar />
      <Profile />
    </div>
  );
};

export default Home;
