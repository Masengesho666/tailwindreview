import React, { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
  
      return () => clearInterval(interval); 
    }, []); 
  
    return <h1 className=" flex justify-center items-center  text-rose-700">I have rendered {count} times!</h1>;
    console.lo(count)
  };

export default Timer