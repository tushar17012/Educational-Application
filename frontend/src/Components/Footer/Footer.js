import React from "react";
import { PauseButton } from "../Pausebutton/Pausebutton";
import "./Footer.css";

function Footer({handleSubmit}) {
  return (
    <>
      <div>
        <button onClick={()=>handleSubmit()} class="b1">Submit</button>
      </div>
    </>
  );
}

export default Footer;
