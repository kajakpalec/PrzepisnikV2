import React from 'react';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from '@contentful/rich-text-types'
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
  font-family: 'Titillium Web', sans-serif
`;

const Image = styled.img`
    max-width: 700px;
    height:auto;
`;


const Header = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const H3 = styled.h3`
  text-align: center;
  font-size: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const Time = styled.div`
  
  display:flex;
  flex-direction: row;
  padding: 5px;
  background-color: #B5B5B5;
  margin: 20px;
  margin-top:0;
`;

const Text = styled.div`
  margin: 0 10px 0 10px;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RICHTEXT_OPIONS={
  renderNode:{
    [BLOCKS.PARAGRAPH]: (node,children)=>{
      return <p>{children}</p>
    }
  }
}

const SingleRecipe = ({recipe}) => (
    <>
      <Header>{recipe.nazwa}</Header>
      <Container>
        {/* rozmiary zdjęć można zmieniać w query żeby wszędzie były takie same */}
        <Info>
          <Time>
            <h3>Czas przygotowania dania: {recipe.czasPrzygotowania}</h3>
          </Time>
          <Time>
            <h3>Stopień trudności: {recipe.stopienTrudnosci}</h3>
          </Time>
        </Info>
        <SContainer>
          <Image src={recipe.zdjecie.url} alt={recipe.zdjecie.title}></Image>
          <Text>
            <H3>Składniki</H3>
            <ul>{recipe.skladniki.map(skladnik => (<li key={skladnik}>{skladnik}</li>))}</ul>
            <H3>Przygotowanie</H3>
            <p>{documentToReactComponents(recipe.przygotowanie.json,RICHTEXT_OPIONS)}</p>
          </Text>
        </SContainer>
      </Container>
    </>
)

export default SingleRecipe;