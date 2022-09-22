import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export default function Watch({ setWatch }) {
  const navigate = useNavigate();
  function back() {
    navigate("/home");
  }
  return (
    <div className="watch">
      <div className="back">
        <button onClick={back}>
          {" "}
          <ArrowBackIcon />
          <span>Back</span>
        </button>
      </div>
      {/* <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/embed/zMiYq3x_IgQ"
      /> */}
      <iframe
        width="100%"
        height="590"
        src="https://www.youtube.com/embed/zMiYq3x_IgQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
