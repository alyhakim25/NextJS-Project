import Link from "next/link";
import classes from "./index.module.css";
import { useRouter } from "next/router";
import Popup from "../pop-up";
import React, { useEffect, useState } from "react";
import Profile from "@/pages/profile/profile";
import About from "@/pages/about/about";


function Header(props) {
  const router = useRouter();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  const showProfile=()=>{
    setShowProfilePopup(!showProfilePopup);
  }
  const showAbout=()=>{
    setShowAboutPopup(!showAboutPopup);
  }

  //onClick={()=>{handleClick({value:"project"})}}
  return (
    <div className={classes.div}>
      {showProfilePopup ? <Profile showProfile={showProfile}/> : <div/>}
      {showAboutPopup ? <About showAbout={showAbout}/> : <div/>}
      <label className={classes.logotext}>Aly Hakim Labs</label>
      
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/homepage">Overview</Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/project/project-page",
                query: { value: "project" },
              }}
            >
              My Project
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={()=>{showProfile()}}
            >
              My Profile
            </a>
          </li>
          <li>
            <a href="#"
            onClick={()=>{showAbout()}}>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
