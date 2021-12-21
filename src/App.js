import './App.css';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate';
import About from './pages/About/About';

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/about' exact Component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
