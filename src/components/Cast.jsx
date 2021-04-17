import axios from 'axios';
import { Component } from 'react';

class Cast extends Component {
  state = {
    actors: [],
  };
  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/615457/credits?api_key=0c26ad7fd1fc526007c784bb0321d6a5&language=en-US',
      )
      .then(response => console.log(response));
  }
  render() {
    return <>111</>;
  }
}
export default Cast;
