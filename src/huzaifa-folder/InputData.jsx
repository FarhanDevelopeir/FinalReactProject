import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InputData = () => {

  const [userData, setUserData] =useState({Email:'',Name:'',No:''})
  const handleName=(e)=>{
    setUserData({...userData, Name : e.target.value})

  }

  const handleNo=(e)=>{
    setUserData({...userData, No : e.target.value})
  }

  const handleEmail=(e)=>{
    setUserData({...userData, Email : e.target.value})

  }
  const formHandling =(e)=>{
    e.preventDefault()
    console.log(userData);
    
  }
  return (
    <div>
      <form className=" w-full my-10 " onSubmit={formHandling}>
        <div className="input-fields mx-auto w-[45%] h-[75vh] border-[3px] bg-slate-50 rounded-2xl border-black px-[80px] py-3 ">
          <div className="name_phone ">
            <div className="name relative">
              <label
                htmlFor="Name"
                className="text-[35px] font-semibold font-sans"
              >
                Enter Name
              </label>
              <br />
              <input
                
                spellCheck="true"
                type="text"
                id="Name"
                value={userData.Name}
                onChange={handleName}
                placeholder="Enter Name"
                className=" text-[30px] p-5 w-[400px] h-[40px] border-[2px] border-black rounded-lg"
              />
              <FontAwesomeIcon icon={faUser} className="ml-4 text-[30px] absolute top-[60px] right-[8px]" />
              <br />
              <br />
            </div>
            <div className="number relative ">
              <label
                htmlFor="number"
                className="text-[35px] font-semibold font-sans"
              >
                Enter Phone Number
              </label>
              <br />
              <input
                
                type="number"
                id="number"
                value={userData.No}
                onChange={handleNo}
                placeholder="Enter Phone Number"
                className="  text-[25px] p-5 w-[400px] h-[40px] border-[2px] border-black rounded-lg"
              />
              <FontAwesomeIcon icon={faPhone} className="ml-4 text-[30px] absolute top-[60px] right-[0px]" />
              <br />
              <br />
            </div>
          </div>
          <div className="email relative">
            <label
              htmlFor="email"
              className="text-[35px] font-semibold font-sans"
            >
              Enter Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              value={userData.Email}
              onChange={handleEmail}
              placeholder="Enter Email"
              className="  text-[25px] p-5 w-[400px] h-[40px] border-[2px] border-black rounded-lg"
            />
            <FontAwesomeIcon icon={faEnvelope} className="ml-4 text-[30px] absolute top-[60px] right-[00px]" />
            <br />
            <br />
          </div>
          <center>
            <button className="bg-slate-800 text-white font-sans font-semibold hover:bg-slate-950 w-[30%] h-[60px] my-2 border-[2px] border-black rounded-xl">
              Add User
            </button>
          </center>
        </div>
      </form>
      <div className="back-button">
        <button>
        <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="ml-4 text-[30px] text-white bg-slate-700 px-5 py-3 hover:bg-slate-950 border-[2px] border-black rounded-lg absolute top-[120px] left-[20px]" />
        </Link>
        </button>
      </div>
    </div>
  );
};

export default InputData;
