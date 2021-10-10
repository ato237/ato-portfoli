import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarElements,
  Title,
  SocialMedia,
} from "./NavbarStyle";
import { motion } from "framer-motion";

import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Menu from "./Menu";

function Navbar() {
  const [hoverInstagram, setHoverInstagram] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = () => {
    setHoverInstagram(!hoverInstagram);
  };

  const [hoverTwitter, setHoverTwitter] = useState(false);

  const handleTwitterHover = () => {
    setHoverTwitter(!hoverTwitter);
  };
  return (
    <>
      <Menu clicked={clicked} />

      <NavbarContainer>
        <NavbarWrapper>
          <NavbarElements>
            <Title
              style={
                clicked
                  ? { cursor: "pointer", fontSize: 35, color: "#fff" }
                  : { color: "#000", cursor: "pointer", fontSize: 35 }
              }
              to="/"
            >
              A.T.O Bradley
            </Title>
          </NavbarElements>
          <NavbarElements>
            <motion.div
              style={{ marginLeft: "100px" }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              animate={
                hoverInstagram ? { scale: 1.2, rotateY: 360 } : { scale: 1 }
              }
            >
              <FiTwitter
                style={
                  clicked
                    ? { cursor: "pointer", fontSize: 35, color: "#fff" }
                    : { color: "#000", cursor: "pointer", fontSize: 35 }
                }
              />
            </motion.div>
          </NavbarElements>
          <NavbarElements>
            <motion.div
              onMouseEnter={handleTwitterHover}
              onMouseLeave={handleTwitterHover}
              animate={
                hoverTwitter ? { scale: 1.3, rotate: 360 } : { scale: 1 }
              }
            >
              <FiInstagram
                style={
                  clicked
                    ? { cursor: "pointer", fontSize: 35, color: "#fff" }
                    : { color: "#000", cursor: "pointer", fontSize: 35 }
                }
              />
            </motion.div>
          </NavbarElements>
          <NavbarElements>
            <motion.div>
              {!clicked ? (
                <HiOutlineMenuAlt2
                  onClick={() => setClicked(!clicked)}
                  style={
                    clicked
                      ? { cursor: "pointer", fontSize: 35, color: "#fff" }
                      : { color: "#000", cursor: "pointer", fontSize: 35 }
                  }
                />
              ) : (
                <HiOutlineMenuAlt1
                  onClick={() => setClicked(!clicked)}
                  style={
                    clicked
                      ? { cursor: "pointer", fontSize: 35, color: "#fff" }
                      : { color: "#000", cursor: "pointer", fontSize: 35 }
                  }
                />
              )}
            </motion.div>
          </NavbarElements>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
