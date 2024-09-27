import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const InputData = () => {

  const [userData, setUserData] =useState({Email:'',Name:'',No:''})
  const handleName=(e)=>{
    setUserData({...userData, Name : e.target.value})
    // console.log(userData.Name);
    

  }
  const formHandling =(e)=>{
    e.preventDefault()
    console.log(userData);
    
  }
  return (
    <div>
      <form className=" w-full my-10 " onSubmit={formHandling}>
        <div className="input-fields mx-auto w-[40%] h-[625px] border-[3px] bg-slate-50 rounded-2xl border-black px-[80px] py-3 ">
          <div className="name_phone ">
            <div className="name relative">
              <label
                htmlFor="Name"
                className="text-[45px] font-semibold font-sans"
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
                className=" text-[30px] p-5 w-[500px] h-[60px] border-[2px] border-black rounded-lg"
              />
              <FontAwesomeIcon icon={faUser} className="ml-4 text-[30px] absolute top-[85px] right-[30px]" />
              <br />
              <br />
            </div>
            <div className="number relative ">
              <label
                htmlFor="number"
                className="text-[42px] font-semibold font-sans"
              >
                Enter Phone Number
              </label>
              <br />
              <input
                
                type="number"
                id="number"
                placeholder="Enter Phone Number"
                className=" text-[30px] p-5 w-[500px] h-[60px] border-[2px] border-black rounded-lg"
              />
              <FontAwesomeIcon icon={faPhone} className="ml-4 text-[30px] absolute top-[80px] right-[30px]" />
              <br />
              <br />
            </div>
          </div>
          <div className="email relative">
            <label
              htmlFor="email"
              className="text-[45px] font-semibold font-sans"
            >
              Enter Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className=" text-[25px] p-5 w-[500px] h-[60px] border-[2px] border-black rounded-lg"
            />
            <FontAwesomeIcon icon={faEnvelope} className="ml-4 text-[30px] absolute top-[85px] right-[30px]" />
            <br />
            <br />
          </div>
          <center>
            <button className="bg-lime-400 hover:bg-lime-500 w-[35%] h-[80px] my-5 border-[2px] border-black rounded-xl">
              Add User
            </button>
          </center>
        </div>
      </form>
      {userData.Name}
    </div>
  );
};

export default InputData;
