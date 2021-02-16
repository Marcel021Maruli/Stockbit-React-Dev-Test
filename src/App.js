import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { Main, Detail } from "./pages";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main}>
        <Main />
      </Route>
      <Route path="/detail/:id" component={Detail}>
        <Detail />
      </Route>
    </Switch>
  );
}

export default App;
