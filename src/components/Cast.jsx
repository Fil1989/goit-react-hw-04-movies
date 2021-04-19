import axios from 'axios';
import { Component } from 'react';
import image from '../images/nophoto.jpg';

class Cast extends Component {
  state = {
    actors: [],
  };
  async componentDidMount() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.location.state.id}/credits?api_key=0c26ad7fd1fc526007c784bb0321d6a5&language=en-US`,
      )
      .then(response => {
        this.setState({ actors: response.data.cast });
      })
      .catch(error => this.setState({ error }));
  }
  render() {
    return (
      <section className="cast">
        <ul>
          {this.state.actors.map(({ profile_path, name, character, id }) => (
            <li key={id} className="atcors">
              {profile_path === null ? (
                <img src={image} alt={name} className="actor_profile_picture" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className="actor_profile_picture"
                />
              )}
              <p>⦁ {name}</p>
              <p>&nbsp;&nbsp;Character: {character}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Cast;
