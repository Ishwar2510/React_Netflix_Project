

import { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";
import CRoutes from "./Routes/CRoutes";


function App() {

  // const [user,setUsers]=useState([{email:"abc@gmail.com",password:"123456789"}]);
  // const [register,setRegister]=useState(false);
  // const [signin,setSignin]=useState(false);
  // const[verified,setverified]=useState(false);
  // const [watch,setWatch]=useState(false);
  // function restart(){
  //   setSignin(false);
  //   setverified(false);
  //   setRegister(false);
  //   setWatch(false);

  // }
  // useEffect(()=>{
  //   if(verified){
      
  //     setRegister(false);
      
  //   }

  // },[verified])

  return (
    <>
      <CRoutes/>
      
      {/* {(!signin && !verified && !watch)&&<Register user={user} setRegister={setRegister} setUsers={setUsers} setSignin={setSignin} setverified={setverified} />}
      {(signin && !verified &&!watch)&& <Login user={user} setverified={setverified}/>}
      
   
       {(verified && !watch) && <Homepage setWatch={setWatch} restart={restart} />}

       {
        (watch)?<Watch setWatch={setWatch}/>:null
       }
      
       */}

    </>
   
  );
}

export default App;
