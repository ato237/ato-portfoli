import styled from "styled-components";
import { Link as Links } from "react-router-dom";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  margin-top: 0;
  display: flex;
  justify-content: center;
  background: black;
  text-align: center;
  height: 100%;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: 0.3s ease-in-out;
  opacity: $${({ clicked }) => (clicked ? "100%" : "0")};
  top: ${({ clicked }) => (clicked ? "0" : "-100%")};
`;

export const MenuWrapper = styled.ul`
  list-style-type: none;
`;

export const MenuElements = styled.li`
  text-decoration: none;
`;

export const Stuff = styled(Links)`
  text-decoration: none;
  color: white;
  font-size: 130px;

  &:hover {
    text-decoration: underline;
    transition: 0.9s ease-in-out;
  }
`;
