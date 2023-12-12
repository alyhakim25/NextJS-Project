import { useRouter } from "next/router";
import classes from "./project-page.module.css";
import Bodypage from "@/component/body";

function SubProjectPage() {
  const router = useRouter();
  var value = router.query.value;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Bodypage page={"detail"} index={value}/>
      </div>
    </div>
  );
}

export default SubProjectPage;
