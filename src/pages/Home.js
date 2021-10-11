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
          <TextWelcome>ATO BRADLEY</TextWelcome>
        </motion.div>
        <motion.div>
          <TextDescribe>Full Stack Developer</TextDescribe>
        </motion.div>
        <motion.div>
          <HelperDescr>My PortFolio</HelperDescr>
        </motion.div>
      </HomeWrapper>
      <Arrow />
    </HomeContainer>
  );
}

export default Home;
