import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile/index';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/:username" component={Profile} />
        <Route path="/:username/:reponame" component={Profile} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
