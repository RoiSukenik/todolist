import React from "react";
import {Switch,Route, BrowserRouter as Router, Redirect}from 'react-router-dom';

import './css/App.css';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import TodoList from "./containers/TodoList/TodoList";
import History from "./containers/History/History";
import Home from "./containers/Home/Home";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path={"/"} >
              <Redirect to={"/home"}/>
            </Route>
            <Route path={"/home"} component={Home}/>
            <Route path={"/todolist"} component={TodoList}/>
            <Route path={"/history"} component={History}/>
        </Switch>
      </Router>
  );
}

export default App;
