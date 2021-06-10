import React from 'react';
import Footer from './components/footer';
import AllRecipesPage from './pages/allRecipes';
import Header from './components/header';
import MenuBar from './components/menuBar';
import SingleRecipe from './pages/singleRecipe';
import { useState, useEffect } from "react";

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
        title
        url
      }
      rodzaj
      stopienTrudnosci
      czasPrzygotowania
    }
  }
}`;
  
function App() {
    const [przepisy, setPrzepisy] = useState(null);
    const [isSingleRecipe, setIsSIngleRecipe] = useState(true);

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
  }, );

  if (!przepisy) {
    return "Loading...";
  }


  // console.log(przepisy);
  // //const wege = przepisy.find(obj => obj.czasPrzygotowania == 0.5);
  // const wege = przepisy.filter(obj => {
  //   return obj.rodzaj.includes('Zupa')
  // })
  //console.log(showPrzepisy('Zupa'));
  //przepisy.map((przepis) => console.log(przepis.nazwa));

  //console.log(przepisy);

    return (
      <>
        <Header/>
        <MenuBar />
        {isSingleRecipe ? <SingleRecipe recipe={przepisy[0]}/> : <AllRecipesPage recipes={przepisy}/>}
        <Footer />
      </>
    )
  }


export default App;