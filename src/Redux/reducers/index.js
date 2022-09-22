const initialState = {
  loged: false,
  user: "",
};
// if(localStorage.getItem("users")){
//   initialState.loged=true;
// }

function logedReducer(state = initialState, action) {
  if (action.type === "register") {
    return {
      ...state,
      loged: true,
      user: JSON.parse(localStorage.getItem("users")).mail,
    };
  }
  if (action.type === "logout") {
    // console.log("user is ", { ...state, loged: false });
    return {
      ...state,
      loged: false,
    };
  }
  if (action.type === "login") {
    return {
      ...state,
      loged: true,
    };
  }
  return state;
}
export default logedReducer;
