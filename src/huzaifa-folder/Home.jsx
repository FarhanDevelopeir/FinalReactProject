import React from "react";
import { Link } from "react-router-dom";
import InputData from "./InputData";
const Home = () => {
  return (
    <div className="w-full">
      <center>
        <button className="add-user w-[80%] h-[100px] bg-slate-700 text-white border-2 border-black rounded-xl my-10 hover:bg-slate-950">
        <Link to="/details">
          <h1
            className="text-[60px] font-sans font-semibold tracking-[3px]"
            style={{ wordSpacing: "10px" }}
          >
        Add New User
          </h1>
          </Link>
        </button>
      </center>
    </div>
  );
};

export default Home;
