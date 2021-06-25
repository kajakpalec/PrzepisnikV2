import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS} from '@contentful/rich-text-types';
import styled from "styled-components";

const Button = styled.button`
    background-color: #691d4f;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    color:white;
    margin: auto auto;
`;

const B_Container = styled.div`
  height:50px;
  margin-top:20px ;
  text-align:center;
`;

const T_Container = styled.div`
  height:110px;
  border-bottom: dotted pink;
`;

const H_Container = styled.div`
  height:60px;
  text-align: center;
`;



const RICHTEXT_OPIONS={
    renderNode:{
      [BLOCKS.PARAGRAPH]: (node,children)=>{
        return <p>{children}</p>
      }
    }
  }

const RecipePreview = ({recipe, handleShowRecipe}) => {

  function buttonClicked(obj) {
    handleShowRecipe(obj);
  }

   return (
      <>
        <H_Container>
          <h2>{recipe.nazwa}</h2>
        </H_Container>
        <T_Container>
          <p>{documentToReactComponents(recipe.krotkiOpis.json,RICHTEXT_OPIONS)}</p>
        </T_Container>
        
        <B_Container>
          <Button onClick={buttonClicked.bind(this, recipe.nazwa)}>Pokaż mnie</Button> 
        </B_Container>
    </>
)}

export default RecipePreview;