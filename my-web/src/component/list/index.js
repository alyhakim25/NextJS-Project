
import classes from "./index.module.css";

import SimpleCard from "@/ui/simple-card";
function ListView(props) {
  
  ///project/[id]
  return (
    <div className={classes.listContainer}>
      <ul key={props.id} className={classes.list}>
        {props.data.map((item, index) => {
          if (item.id != "p1") {
            return (
              <div key={item.id} className={classes.card}>
                <SimpleCard dest={`/project/${item.id}`} index={index} id={item.id} active={item.ready}>
                  <div className={classes.content}>
                    <h1 className={classes.text}>{item.title}</h1>
                    <div className={classes.img_container}>
                    <img className={classes.img} src={item.image} />
                    </div>
                    
                  </div>
                </SimpleCard>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
export default ListView;
