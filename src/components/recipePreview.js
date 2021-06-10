import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS} from '@contentful/rich-text-types';

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
        <h2>{recipe.nazwa}</h2>
        <p>{documentToReactComponents(recipe.krotkiOpis.json,RICHTEXT_OPIONS)}</p>
        <button onClick={buttonClicked.bind(this, recipe.nazwa)}>Pokaż mnie</button> 
    </>
)}

export default RecipePreview;