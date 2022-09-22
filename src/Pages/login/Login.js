import { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { useNavigate } from "react-router";

export default function Login(prop) {
  const [email, setEmail] = useState("");
  const [pwd, setpwd] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    if (!email.trim() || !pwd.trim()) {
      alert("pls enter details");
      return;
    }
    let checkUser = JSON.parse(localStorage.getItem("users"));
    if (checkUser.mail === email && checkUser.pswd === pwd) {
      navigate("/home");
      dispatch({ type: "login" });
    } else {
      alert("Check your Credential");
    }
  }

  function backbtn() {
    navigate("/register");
  }
  function einput(event) {
    setEmail(event.target.value);
  }
  function pinput(event) {
    setpwd(event.target.value);
  }
  // function submit(event){
  //     event.preventDefault();

  //     // console.log(email,pwd,prop.user[0].email,prop.user[0].password);
  //     if(prop.user[0].email==email && prop.user[0].password==pwd){
  //       prop.setverified(true);
  //     }else{
  //       alert("pls enter correct details")
  //     }
  // }
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

      <div className="lcontainer">
        <form className="lform" onSubmit={submit}>
          <h1>Sign In</h1>
          <input
            className="linput"
            type="email"
            placeholder="Email abc@gmail.com"
            value={email}
            onChange={einput}
            required
          />
          <input
            className="linput"
            type="password"
            placeholder="Password 123456789"
            value={pwd}
            onChange={pinput}
            required
          />
          <button className="lloginButton">Sign In</button>
          <br></br>
          <button className="lloginButton" onClick={backbtn}>
            Back
          </button>
        </form>
        {/* <div>
            <h3>New to Netflix  ?</h3>
            <button style={{backgroundColor:'green'}}>Register Now</button>
        </div> */}
      </div>
    </div>
  );
}
