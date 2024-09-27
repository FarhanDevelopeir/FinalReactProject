import React from "react";
import { Link } from "react-router-dom";
import InputData from "./InputData";
const Home = () => {
  return (
    <div className="w-full">
      <center>
        <button className="add-user w-[80%] h-[100px] bg-lime-400 border-2 border-black rounded-xl my-10 hover:bg-lime-600">
          <h1
            className="text-[60px] font-sans font-semibold tracking-[3px]"
            style={{ wordSpacing: "10px" }}
          >
        <Link to="/details">
        Add New User
        </Link>
          </h1>
        </button>
      </center>
      <div className="list-contact "></div>
    </div>
  );
};

export default Home;
