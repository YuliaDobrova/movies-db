import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    { id: 1, title: "Game of Thrones", popularity: 97, overview: "Dragons..." },
    { id: 2, title: "Harry Potter", popularity: 96, overview: "Wizards..." },
    {
      id: 3,
      title: "Lord of the Rings",
      popularity: 96.5,
      overview: "Hobbits...",
    },
    { id: 4, title: "Inception", popularity: 98, overview: "Dreams..." },
  ],
};

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
