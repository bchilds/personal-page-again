import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PageContextProvider } from '../contexts/page-context';
import About from './about';
import Home from './home';
import NavBar from '../components/nav/nav-bar';

import style from './style.module.scss';

const RouterComponent = () => {
  return (
    <Router>
        <PageContextProvider>
          <nav>
            <NavBar>
              <Link className={style.link} to='/'>
                Home
              </Link>
              <Link className={style.link} to='/about'>
                About
              </Link>
            </NavBar>
          </nav>
      <div className='body'>

          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='*'>
              <Home />
            </Route>
          </Switch>
      </div>
        </PageContextProvider>
    </Router>
  );
};

export default RouterComponent;
