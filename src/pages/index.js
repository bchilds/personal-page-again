import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './about';
import Home from './home';
import NavBar from '../components/nav/nav-bar';

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavBar>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </NavBar>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default RouterComponent;
