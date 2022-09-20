import {useSelector} from 'react-redux'
import Homepage from '../../Pages/Homepage/Homepage'
import Login from '../../Pages/login/Login'

export default function LoginHOC() {
    const loged = useSelector((state) => {
      return state.logedReducer.loged;
    });
    // let loged=localStorage.getItem("users");
    console.log(loged);
    return <>{loged ? <Homepage /> : <Login />}</>;
  }