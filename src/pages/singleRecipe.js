import React from 'react';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from '@contentful/rich-text-types'

const RICHTEXT_OPIONS={
  renderNode:{
    [BLOCKS.PARAGRAPH]: (node,children)=>{
      return <p>{children}</p>
    }
  }
}

const SingleRecipe = ({recipe}) => (
    <>
        <h1>{recipe.nazwa}</h1>
        {/* rozmiary zdjęć można zmieniać w query żeby wszędzie były takie same */}
        <h3>Czas przygotowania</h3>
        <p>{recipe.czasPrzygotowania}</p>
        <h3>Stopień trudności</h3>
        <p>{recipe.stopienTrudnosci}</p>
        <img src={recipe.zdjecie.url} alt={recipe.zdjecie.title}></img>
        <h3>Składniki</h3>
        <ul>{recipe.skladniki.map(skladnik => (<li key={skladnik}>{skladnik}</li>))}</ul>
        <h3>Przygotowanie</h3>
        <p>{documentToReactComponents(recipe.przygotowanie.json,RICHTEXT_OPIONS)}</p>
    </>
)

export default SingleRecipe;