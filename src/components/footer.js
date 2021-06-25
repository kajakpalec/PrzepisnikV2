import React from 'react';
import styled from "styled-components";

const F_Container = styled.div `
   background-color: pink;
   border-radius: 40px;
   padding: 30px;
   padding-top: 10px;
   text-align: center;
   height:100px;
`;

const Admin_panel = styled.a`
    color: #f558e5;
    text-decoration: none;
`;


const Footer = () => (
    <>
        <F_Container>
            <h2>Made with love</h2>
            <h3>Karolina, Karolina, Kasia</h3>
            <Admin_panel href="https://be.contentful.com/login">Admin panel</Admin_panel>
        </F_Container>
    </>
)

export default Footer;