import React from 'react';
import Footer from './components/footer';
import AllRecipesPage from './pages/allRecipes';
import Header from './components/header';
import MenuBar from './components/menuBar';
import SingleRecipe from './pages/singleRecipe';


//Tutaj jest template strony, Header, MenuBar i Footer są stałą częścią
//Jedynie to czy mamy widok pojedynczego przepisu, czy widok wszystkich przepisów z danej
//kategorii będzie się zmieniało.
//Myślę że mozna jakąś zmienną tutaj walnąć żeby tym sterowć, dzięki temu nie musimy
//robić żadnego routingu (jajjjjj)

const recipes = [{
  name: 'Fajny Przepis',
  ingredients: 'Duzo soli',
  description: 'Dobrze wymieszaj'
},
{
  name: 'Fajny Przepis 2',
  ingredients: 'Duzo pieprzu',
  description: 'Dobrze wymieszaj'
},
]; //wszystkie przepisy które przekazujemy do danej strony


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
class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <MenuBar />
        {isSingleRecipe ? <SingleRecipe recipe={recipes[0]}/> : <AllRecipesPage recipes={recipes}/>}
        <Footer />
      </>
    )
  }
}

export default App;