import genres from './genres';
import { Link } from 'react-router-dom';
import Cast from './Cast';

const MovieDescription = props => {
  const moovieGenres = genres.filter(({ id }) =>
    props.location.state.genre_ids.includes(id),
  );
  return (
    <>
      <button onClick={() => props.history.push('/')} className="go_back">
        ←Go Back
      </button>
      <section className="movie_description">
        <img src={props.location.state.poster} alt="alt" className="poster" />
        <div>
          <h2>{props.location.state.title}</h2>
          <p>User score: {props.location.state.score}</p>
          <h3>Overview</h3>
          <p>{props.location.state.overview}</p>
          <h3>Genres</h3>
          <p>{`${moovieGenres.map(genre => ' ' + genre.name)}`}</p>
        </div>
      </section>
      <section className="aditional_info">
        Aditional information
        <ul>
          <li>
                      <Link to={{
                pathname=`/movies/${props.location.state.id}/cast`
            }}>Cast</Link>
          </li>
          <li>
            <Link to="/">Reviews</Link>
          </li>
        </ul>
        <Cast />
      </section>
    </>
  );
};
export default MovieDescription;
