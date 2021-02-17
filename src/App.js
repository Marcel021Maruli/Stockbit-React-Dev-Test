import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { Main, Detail } from "./pages";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
