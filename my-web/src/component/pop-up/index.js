import React, { useEffect, useState } from "react";
import classes from "./index.module.css"; // You'll create this CSS file


const Popup = ({children,onPopup}) =>{
  
  return (
      <div
        className={classes.popup}
        
      >
        <div className={classes.popupContent}>
          <div className={classes.content}>{children}</div>

          <div className={classes.button_container}>
            <button className={classes.button}>
              <a
                href={"/document/New_CV.pdf"}
                download="CV_Abdullah_Fuad_Hassan_Aly_Hakim.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </button>
            <button
              onClick={()=>{onPopup()}
              }
              className={classes.button}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default Popup;
