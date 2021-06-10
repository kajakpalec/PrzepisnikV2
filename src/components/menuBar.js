import React from 'react';

const list = ['Śniadanie', 'Deser', 'Danie wegańskie', 'Kolacja', 'Danie główne']

const MenuBar = () => (
    <>
    {    
        list.map((category)=>
         (<button>{category}</button>))
    }   
    </>
)

export default MenuBar;