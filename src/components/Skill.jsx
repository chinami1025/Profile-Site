import React from "react";
import "../styles/skill.css";
import { skillItems } from "../contents";

const Skill = () => {
  return (
    <section className="skill">
      <h2 className="title">SKILL</h2>
      <div className="skill-contents">
        {skillItems.map((items, key) => {
          return (
            <div className="skill-items" key={key}>
              <img src={items.img} alt={items.alt} />
              <h4>{items.lang}</h4>
              <p>{items.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
