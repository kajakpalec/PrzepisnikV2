import React, { Children } from 'react';
import Footer from './components/footer';
import AllRecipesPage from './pages/allRecipes';
import Header from './components/header';
import MenuBar from './components/menuBar';
import SingleRecipe from './pages/singleRecipe';
import { useState, useEffect } from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS,INLINES} from '@contentful/rich-text-types'


//Tutaj jest template strony, Header, MenuBar i Footer są stałą częścią
//Jedynie to czy mamy widok pojedynczego przepisu, czy widok wszystkich przepisów z danej
//kategorii będzie się zmieniało.
//Myślę że mozna jakąś zmienną tutaj walnąć żeby tym sterowć, dzięki temu nie musimy
//robić żadnego routingu (jajjjjj)

// const recipes = [{
//   name: 'Fajny Przepis',
//   ingredients: 'Duzo soli',
//   description: 'Dobrze wymieszaj'
// },
// {
//   name: 'Fajny Przepis 2',
//   ingredients: 'Duzo pieprzu',
//   description: 'Dobrze wymieszaj'
// },
// ]; //wszystkie przepisy które przekazujemy do danej strony

const RICHTEXT_OPIONS={
  renderNode:{
    [BLOCKS.PARAGRAPH]: (node,children)=>{
      return <p>{children}</p>
    }
  }
}

var recipes=[]
//Tutaj w zależności od tego czy bedzie true czy false to albo będzie widok pojedynczego przeisu, albo lista z przepisami wszystkimi
let isSingleRecipe = true;
const query=`{
  przepisyCollection
  {
    items{
      nazwa
      krotkiOpis{
        json
      }
      skladniki
      przygotowanie{
        json
      }
      zdjecie{
        url
      }
      rodzaj
      stopienTrudnosci
      czasPrzygotowania
    }
  }
}`;
//class App extends React.Component {

  function App() {
    const [przepisy, setPrzepisy] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/hhis3uc7myn9/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer Y2QY1p9rWASMjQ7y8DZjQIHR0hIgfWuRvPah58eADow",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPrzepisy(data.przepisyCollection.items);
      });
  }, []);

  if (!przepisy) {
    return "Loading...";
  }
  
  for (var i=0;i<przepisy.length;i++)
  {
    recipes.push(
      {
        name:przepisy[i].nazwa,
        ingredients: przepisy[i].skladniki,
        description: documentToReactComponents(przepisy[i].przygotowanie.json,RICHTEXT_OPIONS)
      }
    )
  }
  console.log(przepisy.length);
    return (
      <>
        <Header/>
        <MenuBar />
        {isSingleRecipe ? <SingleRecipe recipe={recipes[0]}/> : <AllRecipesPage recipes={recipes}/>}
        <Footer />
      </>
    )
  }
//}

export default App;