import axios from 'axios';
import { Component } from 'react';
import FormComponent from './FormComponent';
import { Link } from 'react-router-dom';
class Movies extends Component {
  state = {
    movies: [],
    query: '',
  };
  componentDidMount() {
    if (this.props.location.state != null) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${this.props.location.state}&api_key=0c26ad7fd1fc526007c784bb0321d6a5&language=en-US&page=1&include_adult=false`,
        )
        .then(response => {
          this.setState({
            movies: response.data.results,
            query: this.props.location.state,
          });
        });
    }
  }
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ query: e.currentTarget[0].value });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${e.currentTarget[0].value}&api_key=0c26ad7fd1fc526007c784bb0321d6a5&language=en-US&page=1&include_adult=false`,
      )
      .then(response => {
        this.setState({ movies: response.data.results });
      });
  };
  render() {
    return (
      <>
        <FormComponent
          onSubmit={this.handleSubmit}
          defaultValue={this.props.location.state}
        />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  //   state: { movie: movie, query: this.state.query },
                  state: { ...movie, query: this.state.query },
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
export default Movies;
