import { StylesProvider } from '@material-ui/core/styles';
import './app.module.scss';
import Router from './pages';

function App() {
  return (
    <StylesProvider injectFirst>
      <div className='app'>
        <Router />
        <div className='footer'></div>
      </div>
    </StylesProvider>
  );
}

export default App;
