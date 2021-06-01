import React from 'react';
import RecipePreview from '../components/recipePreview';


const AllRecipesPage = ({recipes}) => (
    <>
        <h2>Kategoria Przepisu</h2>
        {    
            recipes.map((recipe)=>
            (<RecipePreview recipe={recipe}/>))
        }   
    </>
)

export default AllRecipesPage;