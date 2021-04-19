import axios from 'axios';
import { Component } from 'react';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.location.state.id}/reviews?api_key=0c26ad7fd1fc526007c784bb0321d6a5&language=en-US&page=1`,
      )
      .then(response => {
        this.setState({ reviews: response.data.results });
        console.log(response.data.results);
      })
      .catch(error => this.setState({ error }));
  }
  render() {
    return (
      <section className="reviews">
        <ul>
          {this.state.reviews.length !== 0 ? (
            this.state.reviews.map(({ author, content, id }) => (
              <li key={id} className="reviews">
                <h3>Author: {author}</h3>
                <p> {content}</p>
              </li>
            ))
          ) : (
            <span>There is no reviews</span>
          )}
        </ul>
      </section>
    );
  }
}
export default Reviews;
