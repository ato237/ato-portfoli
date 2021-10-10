import React from "react";
import { motion } from "framer-motion";
import { MenuContainer, MenuWrapper, MenuElements, Stuff } from "./MenuStyle";
function Menu({ clicked }) {
    const [hover, sethover] = React.useState(false);
    const [hover1, sethover1] = React.useState(false);
    const [hover2, sethover2] = React.useState(false);
    const [hover3, sethover3] = React.useState(false);


  return (
    <MenuContainer clicked={clicked}>
      <MenuWrapper>
        <MenuElements>
          <motion.div
                      animate={hover ? { x: 50 } : { x: 0 }}

          >
            <Stuff
              onMouseEnter={() => sethover(!hover)}
              onMouseLeave={() => sethover(!hover)}
              to="/"
            >
              Home
            </Stuff>
          </motion.div>
        </MenuElements>
        <MenuElements>
          <motion.div
                      animate={hover1 ? { x: -50 } : { x: 0 }}
                      transition={{ delay: 0.2 }}

          >
            <Stuff
              onMouseEnter={() => sethover1(!hover1)}
              onMouseLeave={() => sethover1(!hover1)}
              to="/"
            >
              PROJECTS
            </Stuff>
          </motion.div>
        </MenuElements>

        <MenuElements>
          {" "}
          <motion.div
            animate={hover2 ? { x: 50 } : { x: 0 }}
          >
            <Stuff
              onMouseEnter={() => sethover2(!hover2)}
              onMouseLeave={() => sethover2(!hover2)}
              to="/"
            >
              ABOUT ME
            </Stuff>
          </motion.div>
        </MenuElements>
        <MenuElements>
          <motion.div
            animate={hover3 ? { x: -50 } : { x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Stuff
              onMouseEnter={() => sethover3(!hover3)}
              onMouseLeave={() => sethover3(!hover3)}
              to="/"
            >
              CONTACT ME
            </Stuff>
          </motion.div>{" "}
        </MenuElements>
      </MenuWrapper>
    </MenuContainer>
  );
}

export default Menu;
