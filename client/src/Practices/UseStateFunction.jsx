import React from "react";
import {useState} from "react";

const UseStateFunction = () => {
  let [msg, setMsg] = useState("Hello");

  let gmHandler = () => {
    setMsg("Hello, Good Morning, how are you?");
  };
  let gnHandler = () => {
    setMsg("Hello, Good Night, am going to sleep");
  };

  return (
    <div>
      <pre>{JSON.stringify(msg)}</pre>
      <h1>{msg}</h1>
      <button className='button__primary' onClick={gmHandler}>
        GM
      </button>
      <button className='button__primary' onClick={gnHandler}>
        GM
      </button>
    </div>
  );
};

export default UseStateFunction;
