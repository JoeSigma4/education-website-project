import { useState } from "react";
import "./Videoplayer.css"
import video from "../../assets/video.mp4"

function Videoplayer ({play, setPlay})  {
  return (
    <div className={`videoplayer ${play?"": "hide"}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
