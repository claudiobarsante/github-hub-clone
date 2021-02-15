import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Profile} />
        <Route path='/:username' component={Profile} />
        <Route path='/:username/:reponame' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
