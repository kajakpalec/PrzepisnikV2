import React from 'react';
import RecipePreview from '../components/recipePreview';
import styled from "styled-components";

const Container = styled.div`
  width: 65%;
  margin: 0 auto;
  height: auto;
  background-color: #D0D0D0;
  border-radius: 100px; 
  padding: 60px;
  padding-bottom: 100px;
  margin-bottom: 50px;
  font-family: 'Titillium Web', sans-serif;
`;

const F_Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const Recipe = styled.div`
    width: 43%;
    border-radius: 30px;
    margin: 20px;
    padding: 20px;
    padding-top:0;
    background-color: #B5B5B5;
`;



const AllRecipesPage = ({recipes, handleShowRecipe}) => (
    <>
        <Container>
            <h2>Kategoria Przepisu</h2>
            <F_Container>
            {    
                recipes.map((recipe)=>
                (<Recipe><RecipePreview recipe={recipe} handleShowRecipe={handleShowRecipe}/></Recipe>))
            }   
            </F_Container>
        </Container>
    </>
)

export default AllRecipesPage;