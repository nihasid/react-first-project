import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <div>
     
        <ul className={classes.list}>
        
          {props.meetups.map((meetup) => (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              title={meetup.title}
              image={meetup.image}
              description={meetup.description}
            />
          ))}

      
        </ul>
    </div>
  );
}

export default MeetupList;
