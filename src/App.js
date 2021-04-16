import { Route, Switch, NavLink } from 'react-router-dom';
import { Component } from 'react';
import AllRoutes from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/" className="navigation">
            HomePage
          </NavLink>
          <NavLink to="/movies" className="navigation">
            Movies
          </NavLink>
        </header>
        <AllRoutes />
      </div>
    );
  }
}

export default App;
