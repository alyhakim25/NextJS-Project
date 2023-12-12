import React, { useEffect, useState } from "react";
import classes from "./index.module.css"; // You'll create this CSS file

const SmallPopup = ({children,onPopup}) =>{
  return (
      <div
        className={classes.popup}
      >
        <div className={classes.popupContent}>
          <div className={classes.content}>{children}</div>

          <div className={classes.button_container}>
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

export default SmallPopup;
