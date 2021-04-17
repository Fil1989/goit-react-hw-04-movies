import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {
  state = {
    popular: [],
  };
  componentDidMount() {
    // axios.defaults = 'https://api.themoviedb.org/3';
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=0c26ad7fd1fc526007c784bb0321d6a5&page=1',
      )
      .then(response => {
        this.setState({ popular: response.data.results });
        console.log(response.data.results);
      });
  }
  render() {
    console.log(this.state.popular);
    return (
      <>
        <ul>
          {this.state.popular.map(movie => (
            <li key={movie.id} className="list">
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    title: movie.title,
                    score: `${movie.vote_average * 10}%`,
                    overview: movie.overview,
                    genre_ids: movie.genre_ids,
                    id: movie.id,
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default HomePage;
