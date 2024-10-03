import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
} from "@tabler/icons-react";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__media">
        <li className="footer__media-item">
          <a title="Instagram" href="https://instagram.com/swingtiago">
            <IconBrandInstagram />
          </a>
        </li>
        <li className="footer__media-item">
          <a title="Facebook" href="https://www.facebook.com/swingtiago">
            <IconBrandFacebook />
          </a>
        </li>
        <li className="footer__media-item">
          <a
            title="Youtube"
            href="https://www.youtube.com/channel/UCghhZJLAiRz6dyNo8vvmYMw"
          >
            <IconBrandYoutube />
          </a>
        </li>
        <li className="footer__media-item">
          <a title="Spotify" href="http://open.spotify.com/user/swingtiago">
            <IconBrandSpotify />
          </a>
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
