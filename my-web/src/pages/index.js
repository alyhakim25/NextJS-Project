import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "./homepage";
import classes from './index.module.css'
import { useRouter } from 'next/router';
import MyProjectpage from "./project/project-page";
import Profile from "./profile/profile";
import { useEffect, useState } from "react";
import About from "./about/about";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  
  return (
    <div className={classes.div}>
    <Homepage/>
    </div>
  );
}
export default Home;
