import React from 'react';
import App from '../App';

const list = ['Wszystkie przepisy','Śniadanie', 'Deser', 'Danie wegańskie', 'Kolacja', 'Danie główne']

const MenuBar = ({handleClick}) => {

    function handleButtonClick(obj) {
        handleClick(obj);
    }

    return ( <>
    {    
        list.map((category)=>
         (<button name={category} onClick={handleButtonClick.bind(this, category)}>{category}</button>))
    }   
    </>)
}

export default MenuBar;