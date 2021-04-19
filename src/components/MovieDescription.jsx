import genres from './genres';
import { Route, Link } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import image from '../images/nophoto.jpg';

const MovieDescription = props => {
  const moovieGenres = genres.filter(({ id }) =>
    props.location.state.genre_ids.includes(id),
  );
  return (
    <>
      <button
        onClick={() =>
          props.history.push({
            pathname: '/movies',
            state: props.location.state.query,
          })
        }
        className="go_back"
      >
        ←Go Back
      </button>
      <section className="movie_description">
        {props.location.state.poster_path === null ? (
          <img src={image} alt="alt" className="poster" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${props.location.state.poster_path}`}
            alt="alt"
            className="poster"
          />
        )}

        <div>
          <h2>{props.location.state.title}</h2>
          <p>User score: {`${props.location.state.vote_average * 10}%`}</p>
          <h3>Overview</h3>
          <p>{props.location.state.overview}</p>
          <h3>Genres</h3>
          <p>{`${moovieGenres.map(({ name }) => ` ${name}`)}`}</p>
        </div>
      </section>
      <section className="aditional_info">
        Aditional information
        <ul>
          <li>
            <Link
              to={{
                pathname: `${props.match.url}/cast`,
                state: props.location.state,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${props.match.url}/reviews`,
                state: props.location.state,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </section>

      <Route path="/movies/:id/cast" component={Cast} />
      <Route path="/movies/:id/reviews" component={Reviews} />
    </>
  );
};
export default MovieDescription;
