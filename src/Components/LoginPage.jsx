import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const admin = "Farhan"
  const navigate = useNavigate()

  const login=()=>{
      
      if(name === admin){
            localStorage.setItem("user", true)
            navigate('/admin')
      }else{
            setError(true)
      }
  }
  return (
    <div>
      <h1 className=" text-6xl font-semibold">LoginPage</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="border rounded-lg p-2" placeholder="enter name"/>
      <button onClick={login}>Submit</button>
      {error && <h1>Plz Enter correct name</h1>}

    </div>
  );
};

export default LoginPage;
