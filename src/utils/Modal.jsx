import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../styles/Modal.css";
import { Fade } from "react-reveal";
// import { Link } from "react-router-dom";

export default function BasicModal({ open, handleClose }) {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="modal">
          <Fade left cascade>
            <div>
              <p id="modal-heading">Investing, made easy and better</p>
              <p id="modal-info">
                No hidden fees, no minimum deposit requirement and no long
                account opening processes. Let{"'s"} make some money and build a
                rewarding future together
              </p>
            </div>
          </Fade>
          <Fade right cascade>
            <form action="/invitation" method="get" className="form">
              <input
                value={email}
                type="email"
                name=""
                id="form-input"
                placeholder="Your email"
                onChange={(text) => setEmail(text.target.value)}
              />
              {/* <Link to="/invitation"> */}
                <button className="button">Join waitlist</button>
              {/* </Link> */}
            </form>
          </Fade>
        </Box>
      </Modal>
    </div>
  );
}
