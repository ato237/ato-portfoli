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
@media screen and (max-width:1000px){

}
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
margin-right: 50px;
font-size: 25px;
padding-right: 1050px;
transition: 0.2s ease-in-out;
@media screen and (max-width:1400px){
    padding-right: 550px;
}
@media screen and (max-width:1250px){
    padding-right: 450px;
}
@media screen and (max-width:1150px){
    padding-right: 350px;
}
@media screen and (max-width:960px){
    padding-right: 250px;
}
@media screen and (max-width:660px){
    padding-right: 100px;
}
@media screen and (max-width:500px){
    padding-right: 0px;
}
`

export const SocialMedia = styled.a`

`