import axios from 'axios';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MovieDescription from './MovieDescription';
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
    return (
      <>
        <ul>
          {this.state.popular.map(movie => (
            <li key={movie.id} className="list">
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
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
