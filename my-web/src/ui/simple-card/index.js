import Link from "next/link";
import classes from "./index.module.css";
import { useState } from "react";
import Ongoing from "@/pages/ongoing/ongoing";
function SimpleCard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const showMaintenance=()=>{
    setShowPopup(!showPopup);
  }
  //console.log(props.data)
  //href={{pathname: props.dest, query:{value:props.id}}}
  //as={props.id}
  return (
    <div>
      {showPopup ? <Ongoing showPopup={showMaintenance}/> : <div/>}
      <div className={props.active? classes.active_card : classes.deactive_card} >
      <div className={classes.column}>
        
        <Link onClick={()=>{props.active? {}:showMaintenance()}}   href={props.active? {pathname: props.dest, query:{value:props.index}}:"#"} >
        {props.children}
        </Link>
        
      </div>
    </div>
    </div>
    
  );
}
export default SimpleCard;
