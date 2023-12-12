import classes from "./index.module.css";
function Carditem(props) {
  return (
    <div key={props.id} className={classes.card}>
      <div className={classes.column}>
        <div key={props.id}>
          <input className={classes.ch} type="checkbox" id={props.id} />
          <h1 className={classes.title_text}>{props.title}</h1>
          <p className={classes.text_intro}>{props.introduction}</p>
          {props.expand ? (
            <div key={props.id} className={classes.content}>
              {props.detail.map((detail, index) => (
                <p key={index} className={classes.text_detail}>
                  {detail}
                  <br />
                </p>
              ))}
              {props.children}
              <label  className={classes.label} htmlFor={props.id}>
                Read less
              </label>
            </div>
          ) : props.force ? (
            <div>
              {props.detail.map((detail, index) => (
                <p key={index} className={classes.text_detail}>
                  {detail}
                  <br />
                </p>
              ))}
              {props.children}
            </div>
          ) : <div/>
        }
          {props.expand ? (
            <label className={classes.label} htmlFor={props.id}>
              Read more
            </label>
          ) : (
            <div />
          )}
        </div>
        {props.image ? (
          <img src={props.image} alt="image" className={classes.image}></img>
        ) : (
          <div />
        )}
      </div>
      
    </div>
  );
}
export default Carditem;
