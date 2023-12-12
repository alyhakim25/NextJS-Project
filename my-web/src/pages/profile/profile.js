import Image from "next/image";
import classes from "./profile.module.css";
import Popup from "@/component/pop-up";

function Profile({ showProfile }) {
  return (
    <Popup onPopup={showProfile}>
      <div className={classes.div}>
        <h1 className={classes.header_text}>My Profile</h1>
        <div className={classes.image_container}>
          <img
            className={classes.image}
            src="/image/public/general/my_photo2.jpg"
          />
        </div>
        <p className={classes.name_text}>ALYHAKIM</p>
        <p className={classes.name_text}>SOFTWARE ENGINEER</p>
        <div className={classes.horizontal}>
          <img src={"/icon/mortarboard.png"} alt="Icon" width={30} height={30} />
          <p className={classes.body_text}>Education</p>
        </div>
        <p className={classes.right_pos}>
          1. Batam State Polytechnic, Robotic Engineering(GPA: 3.85)
        </p>
        <p className={classes.right_pos}>
          2. SMKN 1 Batam, Mechatronics Engineering
        </p>

        <div className={classes.horizontal}>
          <img src={"/icon/suitcase.png"} alt="Icon" width={28} height={28} />
          <p className={classes.body_text}>Experience</p>
        </div>
        <p className={classes.right_pos}>
          1. PT.TEC Indonesia, Software Engineer(2 years)
        </p>
        <div className={classes.horizontal}>
          <img src={"/icon/pencil.png"} alt="Icon" width={28} height={28} />
          <p className={classes.body_text}>Skill</p>
        </div>
        <div className={classes.skill}>
          <p>1. Flutter </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>2. React Native </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>3. Java </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>4. Python </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>5. C# </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>6. C </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>7. HTML PHP </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>8. Kotlin </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.skill}>
          <p>9. Robotic </p>
          <div className={classes.skill_Image}>
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-fill.png"} alt="Icon" width={28} height={28} />
            <img src={"/icon/star-empty.png"} alt="Icon" width={28} height={28} />
          </div>
        </div>
        <div className={classes.horizontal}>
          <img src={"/icon/contact.png"} alt="Icon" width={28} height={28} />
          <p className={classes.body_text}>Contact</p>
        </div>
        <div className={classes.horizontal} style={{ paddingLeft: 90 }}>
          <img src={"/icon/instagram.png"} alt="Icon" width={28} height={28} />
          <p className={classes.sosmed_text}>aly_hkm</p>
        </div>
        <div className={classes.horizontal} style={{ paddingLeft: 90 }}>
          <img src={"/icon/facebook.png"} alt="Icon" width={28} height={28} />
          <p className={classes.sosmed_text}>Aly Hakim</p>
        </div>
        <div className={classes.horizontal} style={{ paddingLeft: 90 }}>
          <img src={"/icon/gmail.png"} alt="Icon" width={28} height={28} />
          <p className={classes.sosmed_text}>alyhakim25@gmail.com</p>
        </div>
        <div className={classes.horizontal} style={{ paddingLeft: 90 }}>
          <img src={"/icon/whatsapp.png"} alt="Icon" width={28} height={28} />
          <p className={classes.sosmed_text}>+62 82388822545</p>
        </div>
        <div className={classes.horizontal} style={{ paddingLeft: 90 }}>
          <img src={"/icon/linkedin.png"} alt="Icon" width={28} height={28} />
          <p className={classes.sosmed_text}>Abdullah Fuad Hassan Aly Hakim</p>
        </div>
        <div className={classes.horizontal} style={{ paddingLeft: 90 }}>
          <img src={"/icon/github.png"} alt="Icon" width={28} height={28} />
          <p className={classes.sosmed_text}>alyhakim25</p>
        </div>
      </div>
    </Popup>
  );
}

export default Profile;
