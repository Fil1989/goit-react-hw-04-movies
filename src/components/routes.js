import React, { Suspense } from 'react';
// import Movies from './Movies';
// import HomePage from './HomePage';
// import MovieDescription from './MovieDescription';
import { Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() =>
  import('./HomePage.jsx' /*webpackChunkName: home-page */),
);
const Movies = React.lazy(() =>
  import('./Movies.jsx' /*webpackChunkName: home-page */),
);
const MovieDescription = React.lazy(() =>
  import('./MovieDescription.jsx' /*webpackChunkName: home-page */),
);

const AllRoutes = () => {
  return (
    <Suspense fallback={<h2>Йде завантаження</h2>}>
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDescription} />
      </Switch>
    </Suspense>
  );
};
export default AllRoutes;
