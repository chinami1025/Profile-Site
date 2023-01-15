import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { careerDate } from "../contents";
import "react-vertical-timeline-component/style.min.css";
import "../styles/about.css";

const About = () => {
  return (
    <VerticalTimeline>
      {careerDate.map((item, key) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={key}
            date={item.lineDate}
            dateClassName={"timelineDate"}
            icon={<img className="iconImage" src={item.img} alt={item.alt} />}
          >
            <h3>{item.titleDate}</h3>
            <p>{item.textData}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default About;
