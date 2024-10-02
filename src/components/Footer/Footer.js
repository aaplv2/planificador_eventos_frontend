import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/instagram";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__media">
        <li className="footer__media-item">
          <SocialIcon
            className="footer__media-instagram"
            url="https://instagram.com/swingtiago"
            fgColor="#fff"
            bgColor="none"
          ></SocialIcon>
        </li>
        <li className="footer__media-item">
          <SocialIcon
            className="footer__media-facebook"
            url="https://www.facebook.com/swingtiago"
            fgColor="#fff"
            bgColor="none"
          ></SocialIcon>
        </li>
        <li className="footer__media-item">
          <SocialIcon
            className="footer__media-youtube"
            url="https://www.youtube.com/channel/UCghhZJLAiRz6dyNo8vvmYMw"
            fgColor="#fff"
            bgColor="none"
          ></SocialIcon>
        </li>
        <li className="footer__media-item">
          <SocialIcon
            className="footer__media-spotify"
            url="http://open.spotify.com/user/swingtiago"
            fgColor="#fff"
            bgColor="none"
          ></SocialIcon>
        </li>
      </ul>
      <div className="footer__about">
        <p className="footer__about-title">
          Swing y Lindy Hop en Santiago de Chile
        </p>
        <a className="footer__about-mail">info@swingtiago.com</a>
      </div>
    </div>
  );
}

export default Footer;
