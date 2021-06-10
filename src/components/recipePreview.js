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

const RecipePreview = ({recipe}) => {

   return (
      <>
        <h2>{recipe.nazwa}</h2>
        <p>{documentToReactComponents(recipe.krotkiOpis.json,RICHTEXT_OPIONS)}</p>
        <button>Pokaż mnie</button> 
    </>
)}

export default RecipePreview;