import Header from "@/component/header";
import classes from "./index.module.css";
import Bodypage from "@/component/body";



function Homepage() {
  return (
    <div className={classes.div}>
      <Header/>
      <Bodypage page={"homepage"}/>
    </div>
  );
}

export default Homepage;
