import { useRef } from "react";
import { useState } from "react";
import "./register.css";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle,setToggle]=useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = (event) => {
    if(!email){
      alert("enter email");
      return;
    }
    event.preventDefault();
    setToggle(true);
  };
  const handleFinish = (event) => {
    if(!password){
      alert("enter password");
      return;

    }
    event.preventDefault();
    console.log(props.setUsers);
    props.setUsers((prev)=>{
      return [...prev,{email:email,password:password}]

    })
    props.setRegister(true);
    props.setverified(true);
  };
  function signedin(){
    
    props.setSignin(true);

  }
  function input(event){
    setEmail(event.target.value);


  }
  function pinput(event){
    setPassword(event.target.value)


  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          
        </div>
        
      </div>
      <div className="rcontainer">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!toggle ? (
          <form className="input" onSubmit={handleStart}>
            <input type='email' placeholder="email address for new users" value={email} onChange={input}/>
            <button className="rregisterButton" >
              Get Started
            </button>
          </form>
        ) : (
          <form className="input" onSubmit={handleFinish}>
            <input type="password" placeholder="password" value={password} onChange={pinput} />
            <button className="rregisterButton">
              Start
            </button>
          </form>
          
          
        )}
        <br/>
        <br/>
        <div>
          <h3>Already a Member</h3>
        </div>
        
        <button className="logButton" onClick={signedin}>Sign In</button>
        
      </div>
    </div>
  );
}