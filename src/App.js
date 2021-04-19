import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import AllRoutes from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/" exact className="navigation" activeClassName="active">
            HomePage
          </NavLink>
          <NavLink to="/movies" className="navigation" activeClassName="active">
            Movies
          </NavLink>
        </header>
        <AllRoutes />
      </div>
    );
  }
}

export default App;
