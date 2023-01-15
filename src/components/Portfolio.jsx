import React from "react";
import { portfolioDate } from "../contents";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="title">PORTFOLIO</h2>
      <div className="portfolio-contents">
        {portfolioDate.map((date, key) => {
          return (
            <div className="portfolio-date" key={key}>
              <a href={date.link} className="portfolio-image" target="_blank">
                <img src={date.img} alt={date.alt} />
              </a>
              <div className="portfolio-text">
                <h4>{date.title}</h4>
                <p>{date.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
