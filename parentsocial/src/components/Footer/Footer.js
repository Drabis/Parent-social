import React from "react";
import "./styles.css";


export default function Footer() {
  return (
    <div className="footer ">
      <div className="footerItem">
        <span className="footerTitle">ABOUT US</span>
            Parents favorite website
        <span className="footerTitle">CATEGORIES</span>
        <ul>
          <li className="footerListItem">Daycare</li>
          <li className="footerListItem">Play Day</li>
          <li className="footerListItem"> Interview Prep</li>
          <li className="footerListItem"> Interview clothing</li>
        </ul>
        <span className="footerTitle">FOLLOW US</span>
        <div className="footerSocial">
          <i className="sideIcon fab fa-facebook-square"></i>
          <i className="sideIcon fab fa-instagram-square"></i>
          <i className="sideIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
