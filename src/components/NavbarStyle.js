import styled from "styled-components";
import {motion} from 'framer-motion'
import {Link as Links} from 'react-router-dom'

export const NavbarContainer = styled.div`
z-index: 999;
position: sticky;
top: 0;
background: transparent;
display: flex;
justify-content: center;
`

export const NavbarWrapper = styled.ul`
display: flex;
justify-content: center;
text-decoration: none;
list-style-type: none;

`

export const NavbarElements = styled.li`
padding: 20px;
transition: 0.6ms ease-in-out;


`

export const Title = styled(Links)`
font-family: 'Gemunu Libre', sans-serif;
text-decoration: none;
color: #000;
position: relative;
right: 100px;
margin-right: 50px;
font-size: 35px;
padding-right: 850px;


`

export const SocialMedia = styled.a`

`