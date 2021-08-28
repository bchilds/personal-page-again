import { StylesProvider } from '@material-ui/core/styles';
import './App.css';
import Router from './pages';

function App() {
  return (
    <StylesProvider injectFirst>
      <div className='App'>
        <Router />
      </div>
    </StylesProvider>
  );
}

export default App;
