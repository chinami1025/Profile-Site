import React, { useState, useEffect } from "react";
import upImage from "../Images/up_color.png";
import "../styles/topButton.css";

function ScrollTopButton() {
  //スクロール量に応じたstateを定義
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    //スクロールイベントを監視
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    //スクロール量が1500px以上になったら、showButtonをtrueに
    if (window.pageYOffset > 1500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <div>
      {showButton && (
        <button
          id="top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={upImage} alt="上矢印の画像" />
        </button>
      )}
    </div>
  );
}

export default ScrollTopButton;
