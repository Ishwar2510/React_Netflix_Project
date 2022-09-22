import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import "./Nav.css";

function Navbar(props) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const cuser = useSelector((state) => {
    console.log(state);
    return state.logedReducer.user;
  });
  console.log(" navbar c user is ", cuser);

  window.onscroll = () => {
    setIsScrolled(() => {
      if (window.pageYOffset === 0) {
        return false;
      }
      if (window.pageYOffset > 0) {
        return true;
      }
    });
    return () => (window.onscroll = null);
  };
  function logout() {
    navigate("/login");
    dispatch({ type: "logout" });
  }

  // function logout(){

  //   props.restart();

  // }
  return (
    <div className={isScrolled ? "navbarScrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            width="80px"
            height="30px"
            alt="imagealt"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movie</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>Kid</span>
          <NotificationsIcon />
          <span>{cuser}</span>

          <div className="profile">
            <ArrowDropDownIcon />
            <div className="options">
              <span>Setting</span>
              <span
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
