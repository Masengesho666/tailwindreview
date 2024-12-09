import React, { useState } from "react";
import Button from "./Button";
const Login = () => {

  const[myname,setMyname] = useState("");
  const[displayname,setDisplayname] = useState("");



  const handleShowName = () => {
    if (myname.trim() === "") {
    setDisplayname("You need to provide a name");
    } 
    else {
      setDisplayname(myname);
      setMyname("")
    }

  };


  const handleClear = () => {
   setMyname("");
    setDisplayname("");
  };




    return (
   
      <div className="flex justify-center items-center h-screen">
      
        <div className="flex flex-col flex-col-reverse hover:flex-col space-y-4 items-center bg-slate-300 px-40 py-20 rounded-lg">
           
       
        <h1 className='text-center text-xl'> 
        { displayname || "You need to provide a name"}
        </h1>
        <input className='w-full px-4 p-2 rounded-md focus:ring-2 hover:placeholder:bg-zinc-600' type="mynam" placeholder='Your Name'   value={myname}
          onChange={(e)=>setMyname(e.target.value)}/>
        {/* <input className='w-full px-4 p-2 rounded-md focus:ring-2' type="text" placeholder='input'/>
        <input className='w-full px-4 p-2 rounded-md focus:ring-2' type="password"  placeholder='password'/> */}
 
       <div className="flex  w-full rounded-lg px-14 py-1 space-x-4 bg-black ">
        <Button buttonText="showName" bgcolor="bg-rose-500" hover="bg-fuchsia-700"Text="text-center" onClick={handleShowName}/>
        <Button buttonText="clear" bgcolor="bg-fuchsia-700" hover="bg-rose-500"Text="text-center" onClick={handleClear}/>

     </div>
      </div>
      </div>
    )
  }
  export default Login