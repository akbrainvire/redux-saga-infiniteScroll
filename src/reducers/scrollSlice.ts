import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  isLoading: boolean;
  pokemonList: any[];
  error: string;
  nextUrl: string;
}

const initialState: IInitState = {
  isLoading: false,
  pokemonList: [],
  error: "",
  nextUrl: "",
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    fetchPokemonList: (state) => {
      state.isLoading = true;
    },
    setPokemonListSuccess: (state, action) => {
      //   console.log(action.payload);
      let newPokemonList = action.payload.results;
      //   console.log(newPokemonList);
      state.isLoading = false;
      state.pokemonList = [...state.pokemonList, ...newPokemonList];
    },
    setPokemonListFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setNextUrl: (state, action) => {
      state.nextUrl = action.payload;
    },
    loadMorePokemon: (state) => {
      state.isLoading = true;
    },
    loadMorePokemonSuccess: (state, action) => {
      let newPokemonList = action.payload.results;
      state.isLoading = false;
      state.pokemonList = [...state.pokemonList, ...newPokemonList];
    },
    loadMorePokemonFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchPokemonList,
  loadMorePokemon,
  setPokemonListFailed,
  setNextUrl,
  setPokemonListSuccess,
  loadMorePokemonFailed,
  loadMorePokemonSuccess,
} = scrollSlice.actions;
export default scrollSlice.reducer;
