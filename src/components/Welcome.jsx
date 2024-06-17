import React, { useState } from "react";
import "../styles/Welcome.css";
import logo1 from "../assests/images/logo4.jpeg";
import phone from "../assests/images/phone.png";
import { Fade } from "react-reveal";
import BasicModal from "../utils/Modal";


function Welcome() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <Fade left cascade>
        <BasicModal open={open} handleClose={() => setOpen(false)} />
        <div className="info-container">
          <Fade top cascade>
            <img src={logo1} alt="logo" width={200} id="logo" />
          </Fade>

          <div className="services-info">
            It{"'"}s never been exiciting time to invest
          </div>
          <div className="info-text">
            The easiest way to <br /> buy and sell stocks.
          </div>
          <div className="info-sub-text">
            Banks charge you fees to invest. Halfcard doesn{"'"}t! Commission-free,
            no minimum deposit account that lets you invest in thousands of
            U.S.stocks. Join the waitlist to get early access
          </div>
          <button className="waitlist-button" onClick={() => setOpen(true)}>
            Join waitlist
          </button>
          <div className="terms">
            By signing up, you agree to the Halfcard{"'s "}
            <a href="">Terms of Use</a>
            {" &"} <a href="">Privacy Policy</a>
          </div>
        </div>
      </Fade>
      <Fade right cascade>
        <div className="image-container">
          <img src={phone} alt="logo" id="phone" />
        </div>
      </Fade>
    </div>
  );
}

export default Welcome;
