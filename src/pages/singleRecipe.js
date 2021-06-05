import React from 'react';

const SingleRecipe = ({recipe}) => (
    <>
        <h1>{recipe.name}</h1>
        {/* rozmiary zdjęć można zmieniać w query żeby wszędzie były takie same */}
        <img src={recipe.image.url} alt={recipe.image.title}></img>
        {/*Te składniki się ładnie nie układają :( */}
        <p>{recipe.ingredients}</p>
        <p>{recipe.description}</p>
    </>
)

export default SingleRecipe;