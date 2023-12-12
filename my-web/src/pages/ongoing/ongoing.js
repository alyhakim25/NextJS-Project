
import classes from "./ongoing.module.css";
import SmallPopup from "@/component/small-popup";

function Ongoing({ showPopup }) {
  return (
      <SmallPopup onPopup={showPopup}>
        <div className={classes.body}>
          <img className={classes.image} src="/icon/maintenance.png" />
          <div className={classes.text_container}>
          <p>Sorry.... This page is coming soon</p>
          <p className={classes.p_last}>© 2023 My Website | Created by Aly Hakim</p>
          </div>
        </div>
      </SmallPopup>
  );
}

export default Ongoing;