import React from 'react';
import styled from "styled-components";

const Head = styled.h1`
    font-family: 'Titillium Web', sans-serif
    text-align: center;
    font-size: 50px;
`;

const HeadContainer = styled.div`
    text-align:center;
    border-bottom: 4px dotted pink;
`;

const Header = () => (
    <HeadContainer>
        <Head>Przepiśnik</Head>
    </HeadContainer>
);

export default Header;