import styled from "styled-components";
import { motion } from "framer-motion";
import { RiArrowDownFill } from "react-icons/ri";

export const HomeContainer = styled.div`

`;
export const HomeWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0px;
`;

export const TextWelcome = styled(motion.h1)`
  font-family: "Gemunu Libre", sans-serif;
  cursor: pointer;
  font-size: 200px;
`;
export const TextDescribe = styled(motion.h3)`
  font-family: "Gemunu Libre", sans-serif;
  font-size: 110px;
`;

export const HelperDescr = styled(motion.p)`
  font-family: "Gemunu Libre", sans-serif;
  font-size: 60px;
`;

export const Arrow = styled(RiArrowDownFill)`
  font-size: 20px;
  font-weight: 99;
  cursor: pointer;
  color: white;
  padding: 20px;
  background-color: black;
  border-radius: 50px;
  margin-left: 50%;
`;
export const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: grey;
  border-radius: 50%;
  position: fixed;
`;
