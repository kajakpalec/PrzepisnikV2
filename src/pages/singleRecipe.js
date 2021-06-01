import React from 'react';

const SingleRecipe = ({recipe}) => (
    <>
        <h1>{recipe.name}</h1>
        <p>{recipe.ingredients}</p>
        <p>{recipe.description}</p>
    </>
)

export default SingleRecipe;