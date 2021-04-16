import Movies from './Movies';
import HomePage from './HomePage';
import MovieDescription from './MovieDescription';
import { Route, Switch } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <Switch>
      <Route path="/movies" exact component={Movies} />
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:id" component={MovieDescription} />
    </Switch>
  );
};
export default AllRoutes;
