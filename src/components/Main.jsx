import React from "react";
import mainImage from "../Images/mainImage_kobe.jpg";
import profileImage from "../Images/profile_img.jpg";
import githubImage from "../Images/GitHub-icon.png";
import Skill from "./Skill";
import "../styles/main.css";
import About from "./About";
import Portfolio from "./Portfolio";

const Main = () => {
  return (
    <main>
      <div className="mainImage">
        <img src={mainImage} alt="mainの画像" />
      </div>
      <div className="container">
        <section className="profile">
          <h1 className="title">PROFILE</h1>
          <div className="profile-items">
            <div className="profileImage">
              <img src={profileImage} alt="profileの写真" />
            </div>
            <div className="profile-text">
              <h3>戸田　智奈美</h3>
              <p>
                柔道(中学３年間)：&ensp;初段
                <br></br>弓道(大学４年間)：&ensp;弍段
                <br></br>趣味：&ensp;ゲーム、漫画、アニメ鑑賞
                <br></br>好きなもの：&ensp;料理、化粧品、ガジェット
              </p>
            </div>
          </div>
        </section>

        <section className="about">
          <h2 className="title">ABOUT</h2>
          <h5 className="subtitle">過去の経歴</h5>
          <About />
        </section>

        <Skill />
        <Portfolio />
        <div className="github-link">
          <a
            href="https://github.com/chinami1025"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="github-text">
              <p>GitHubのリンクはこちら</p>
            </div>
            <div className="github-image">
              <img src={githubImage} alt="GitHubのアイコン画像" />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
