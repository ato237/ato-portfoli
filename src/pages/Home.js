import React from "react";
import {
  HomeContainer,
  HomeWrapper,
  TextWelcome,
  Arrow,
  Circle,
  TextDescribe,
  HelperDescr
} from "../styles/HomeStyle";
import { motion } from "framer-motion";

function Home() {
  const [click, setclick] = React.useState(false);

  return (
    <HomeContainer>
      <Circle style={{ left: "1015px" }}></Circle>

      <HomeWrapper>
        <motion.div>
          <TextWelcome>ATO</TextWelcome>
        </motion.div>
        <motion.div>
          <TextDescribe>Hey! I am ATO</TextDescribe>
        </motion.div>
        <motion.div>
          <HelperDescr>Full Stack Developer</HelperDescr>
        </motion.div>
      </HomeWrapper>
      <Arrow />
    </HomeContainer>
  );
}

export default Home;
