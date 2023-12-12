import Link from "next/link";
import classes from "./index.module.css";
import { useEffect, useState } from "react";
import Ongoing from "@/pages/ongoing/ongoing";
import { useRouter } from "next/router";
import { Project } from "@/data";
function ProjectCard(props) {
  //href={{pathname: props.dest, query:{value:props.id}}}
  //as={props.id}
  //console.log(queryValue)
  const [showUI, setShowUI] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check if the previous page is from outside your project's domain
    //const isExternalLink = document.referrer && !document.referrer.startsWith(window.location.origin);
    if(!props.index) {
            //router.replace('/homepage');
            router.push('/homepage', undefined, { shallow: true, replace: true });
    }
    else
    {
        setShowUI(true);
    }
    //if (isExternalLink) {
      // Replace the current state with a new state
    //  window.history.replaceState({}, document.title, window.location.href);
    //}
  }, []);

  return (
    
    showUI? (
        <div className={classes.card}>
          <p className={classes.headertext}>{Project[props.index].title}</p>
          <div className={classes.textcontainer}>
            <p className={classes.headertext}>Description</p>
            <p className={classes.text}>{Project[props.index].introduction}</p>
          </div>
          
          <div className={classes.listContainer}>
          <p className={classes.headertext} style={{paddingTop:30}}>Images</p>
            <ul key={props.id} className={classes.list}>
              {Project[props.index].images.map((item, index) => {
                return <img src={item} className={classes.image} />;
              })}
            </ul>
          </div>
          
          <div className={classes.left}>
          <p className={classes.headertext}>Source Code : <a style={{color:"blue"}} href="https://github.com/alyhakim25/Flutter-Project">Click Here</a></p>
          </div>

          <div className={classes.left}>
          <p className={classes.headertext}>Sample App : <a style={{color:"blue"}}
          href={"/app/attendease.apk"}
          download="attendease.apk"
          target="_blank"
          rel="noreferrer"
        >
          Download app
        </a></p>
          </div>
          
        </div>):<div className={classes.empty}></div>
    
    
  );
}
export default ProjectCard;
