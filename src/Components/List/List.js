import React from "react";
import "./Lists.css";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

function List({ card, setWatch }) {
  function watch() {
    setWatch(true);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {card.map((elem, index) => {
        return (
          <div key={index}>
            <div
              className="card"
              onClick={watch}
              style={{
                width: "180px",
                height: "250px",
                margin: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
                backgroundColor: "rgba(0,0,0,.1)",
              }}
            >
              <img
                height="65%"
                width="100%"
                alt="imagealt"
                src="https://www.heyuguys.com/images/2012/03/The-Avengers-banner-2.jpg"
              />

              <div className="buttons">
                {/* <button style={{position:"absolute",top:"100px",right:"20px",width:"80%",background:"none"}}><PlayCircleOutlinedIcon style={{color:"white",width:"100px"}}/></button> */}
              </div>
              <p style={{ color: "white", padding: "5px", fontSize: "13px" }}>
                Movies Details Avengers Coming Soon
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
