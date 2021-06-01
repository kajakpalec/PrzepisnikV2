import React from 'react';
import MenuItem from './menuItem';

const list = ['Wege', 'Wegan', 'Obiad', 'Deser', 'Zupy']

const MenuBar = () => (
    <>
    {    
        list.map((category)=>
         (<MenuItem name={category}/>))
    }   
    </>
)

export default MenuBar;