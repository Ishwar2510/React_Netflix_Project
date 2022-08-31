import { useState } from "react";
import "./login.css";

export default function Login(prop) {
  const [email,setEmail]=useState("");
  const [pwd,setpwd]=useState("");
  function submit(event){
    event.preventDefault();

  }
  function einput(event){
    setEmail(event.target.value)

  }
  function pinput(event){
    setpwd(event.target.value)

    
  }
  function submit(event){
      event.preventDefault();
  
      // console.log(email,pwd,prop.user[0].email,prop.user[0].password);
      if(prop.user[0].email==email && prop.user[0].password==pwd){
        prop.setverified(true);
      }else{
        alert("pls enter correct details")
      }
  }
  return (
    <div className="llogin">
      <div className="ltop">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="lcontainer" >
      
        <form className="lform" onSubmit={submit}>
          <h1>Sign In</h1>
          <input className="linput" type="email" placeholder="Email abc@gmail.com" value={email} onChange={einput} />
          <input className="linput"  type="password" placeholder="Password 123456789" value={pwd} onChange={pinput} />
          <button className="lloginButton">Sign In</button>
         
          
        </form>
        {/* <div>
            <h3>New to Netflix  ?</h3>
            <button style={{backgroundColor:'green'}}>Register Now</button>
        </div> */}
      </div>
    </div>
  );
}