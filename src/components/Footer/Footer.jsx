import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>
        <u>Minimul Cactus Shop</u>
      </h2>
      <img src={require("./fb.png")} alt="" />
      <img src={require("./twitter.png")} alt="" />
      <img src={require("./insta.png")} alt="" />
    </div>
  );
}

export default Footer;
