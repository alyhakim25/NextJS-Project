import Header from "@/component/header";
import classes from "./project-page.module.css";
import Bodypage from "@/component/body";

function MyProjectpage() {
  
  return (
    <div className={classes.div}>
      <Header />
      <div className={classes.middle}>
        <Bodypage page={"project"} />
      </div>
    </div>
  );
}

export default MyProjectpage;
