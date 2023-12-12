
import classes from "./about.module.css";
import SmallPopup from "@/component/small-popup";

function About({ showAbout }) {
  return (
      <SmallPopup onPopup={showAbout}>
        <div className={classes.body}>
          <img className={classes.image} src="/icon/info.png" />
          <p>This website was created using Next.js framework version 14.0.3</p>
          <p>© 2023 My Website | Created by Aly Hakim</p>
        </div>
      </SmallPopup>
  );
}

export default About;
