import Movies from './Movies';
import Cast from './Cast';
import HomePage from './HomePage';
import MovieDescription from './MovieDescription';
import { Route, Switch } from 'react-router-dom';

const AllRoutes = props => {
  return (
    <Switch>
      <Route path="/movies" exact component={Movies} />
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:id" component={MovieDescription} />
      <Route path="/movies/:id/cast" component={Cast} />
    </Switch>
  );
};
export default AllRoutes;
