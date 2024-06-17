import React from "react";
import "../styles/Footer.css";
import { SiTiktok } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Fade } from "react-reveal";

function Footer() {
  return (
    <div className="footer">
      <Fade bottom cascade>
        <div className="info">
          <div id="footer-heading">A $0 commission fee.</div>
          <div id="next-gen">Join the next-gen investors</div>
          <p id="commission-text">
            Banks and legacy bokerage firms make it difficult and expensive to
            invest. Now, with Halfcard, you{"'"}ll be able to invest as little
            as $1 in your your favorite U.S. companies with no commission fees,
            no long account openning process and no minimum deposit requirement.
          </p>
        </div>
        <p id="privacy">Terms of use</p>
        <p id="privacy">Privacy Policy</p>

        <div id="icons">
          <a href="https://www.tiktok.com/@halfcardapp">
            <SiTiktok />
          </a>
          <a href="https://www.instagram.com/halfcardapp/">
            <FaInstagram id="insta-icon" />
          </a>
          <a href="https://twitter.com/halfcardDev">
            <FiTwitter />
          </a>
        </div>

        <div id="copyright">
          <span>&copy; 2022,</span> Halfcard Inc
        </div>
      </Fade>
    </div>
  );
}

export default Footer;
