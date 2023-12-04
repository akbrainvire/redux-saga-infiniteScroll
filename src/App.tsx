import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonList, loadMorePokemon } from "./reducers/scrollSlice";
import { Dispatch } from "redux";
import {
  Button,
  Container,
  Heading,
  List,
  UnorderedList,
} from "./styles/Styles";
import { Global } from "./styles/Global";

function App() {
  const state = useSelector((state: any) => state.scroll);
  const pokemonList = state.pokemonList;

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const handleLoadMore = () => {
    // console.log(state.nextUrl);
    dispatch(loadMorePokemon(state.nextUrl));
  };
  return (
    <Container>
      <Global />
      <Heading>Redux Saga with Toolkit</Heading>
      <UnorderedList>
        {pokemonList?.map((pokemon: any, index: number) => {
          return <List key={index}>{pokemon.name}</List>;
        })}
      </UnorderedList>
      {state.isLoading ? (
        <Heading>Loading...</Heading>
      ) : (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </Container>
  );
}

export default App;
