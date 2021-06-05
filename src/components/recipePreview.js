import React from 'react';

const RecipePreview = ({recipe}) => (
    <>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        
    </>
)

export default RecipePreview;