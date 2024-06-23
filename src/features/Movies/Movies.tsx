import { Movie } from "../../reducers/movies";

import { connect } from "react-redux";
import { RootState } from "../../store";

interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>{movie.title}</div>
            <div>{movie.overview}</div>
            <div>{movie.popularity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
