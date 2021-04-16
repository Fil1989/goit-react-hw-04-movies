import axios from 'axios';
import { Component } from 'react';
// import { Route } from 'react-router-dom';
class Movies extends Component {
  state = {
    pop: [],
  };
  componentDidMount() {
    // axios.defaults = 'https://api.themoviedb.org/3';
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=0c26ad7fd1fc526007c784bb0321d6a5',
      )
      .then(response => this.setState({ pop: response.data.results }));
  }
  render() {
    return <></>;
  }
}
export default Movies;
