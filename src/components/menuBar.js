import React from 'react';
import styled from "styled-components";


const BarButton = styled.button`
    width: 190px;
    height:80px;
    background-color: #99004C;
    margin: 7px;
    color: white;
    border-radius: 20px;
    font-size: 20px;
`;

const BarContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    border-radius: 100px; 
    padding: 20px;
    margin-bottom: 10px;
    font-family: 'Titillium Web', sans-serif;
`;


const list = ['Wszystkie przepisy','Śniadanie', 'Deser', 'Danie wegańskie', 'Kolacja', 'Danie główne']

const MenuBar = ({handleClick}) => {

    function handleButtonClick(obj) {
        handleClick(obj);
    }

    return (
        
    <>
    <BarContainer>
    {    
        list.map((category)=>
        (<BarButton name={category} onClick={handleButtonClick.bind(this, category)}>{category}</BarButton>))
    }   
    </BarContainer>
    </>)
}

export default MenuBar;