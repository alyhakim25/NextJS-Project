import React, { useEffect, useState } from "react";
import classes from "./index.module.css"; // You'll create this CSS file

const Registration = ({onPopup}) =>{
  return (
      <div
        className={classes.popup}
      >
        <div className={classes.popupContent}>
          <div className={classes.content}>
          
          </div>

          <div className={classes.button}>
            <button
              onClick={()=>{onPopup()}
              }
            >
              Close
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default Registration;
