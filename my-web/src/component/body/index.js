import Carditem from "@/ui/card";
import classes from "./index.module.css";
import React, { useState } from "react";
import { Biodata, Project, Contact, Experience } from "@/data";
import ListView from "../list";
import ProjectCard from "@/ui/project-card";

function Bodypage(props) {
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.";
  const bodyPage = () => {
    if (props.page == "homepage") {
      return (
        <div className={classes.body}>
          <Carditem
            introduction={Biodata[0].introduction}
            title={Biodata[0].title}
            detail={Biodata[0].detail}
            id={Biodata[0].id}
            image={Biodata[0].image}
            expand={Biodata[0].expand}
          />
          <Carditem
            introduction={Experience[0].introduction}
            title={Experience[0].title}
            detail={Experience[0].detail}
            id={Experience[0].id}
            expand={Experience[0].expand}
            force={true}
          >
          {Experience.map((item, index) => {
            if (item.id != "e1") {
              return (
                <div key={item.id}>
                  <Carditem
                    introduction={item.introduction}
                    title={item.title}
                    detail={item.detail}
                    id={item.id}
                    image={item.image}
                    expand={item.expand}
                    force={true}
                  />
                </div>
              );
            }
          })}
          </Carditem>
          <Carditem
            introduction={Project[0].introduction}
            title={Project[0].title}
            detail={Project[0].detail}
            id={Project[0].id}
            image={Project[0].image}
            expand={Project[0].expand}
          >
            {Project.map((item, index) => {
              if (item.id != "p1") {
                return (
                  <div key={item.id}>
                    <Carditem
                      introduction={item.introduction}
                      title={item.title}
                      detail={item.detail}
                      id={item.id}
                      image={item.image}
                      expand={item.expand}
                    />
                  </div>
                );
              }
            })}
          </Carditem>
          <Carditem
            introduction={Contact.introduction}
            title={Contact.title}
            detail={Contact.detail}
            id={Contact.id}
            image={Contact.image}
            expand={Contact.expand}
          />
        </div>
      );
    } else if (props.page == "project") {
      return (
        <div className={classes.bodyproject}>
          <ListView data={Project} id={"l1"} />
        </div>
      );
    }
    else if(props.page == "detail")
    {
      return(
        <div className={classes.bodyprojectdetail}>
          <div className={classes.container}>
            <ProjectCard index={props.index}/>
          </div>
        </div>
      );
    }
  };

  return <div className={classes.div}>{bodyPage()}</div>;
}
export default Bodypage;
