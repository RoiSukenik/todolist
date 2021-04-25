import React from "react";
import {Switch,Route, BrowserRouter as Router, Redirect}from 'react-router-dom';

import './css/App.css';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import TodoList from "./containers/TodoList/TodoList";
import History from "./containers/History/History";
import Home from "./containers/Home/Home";
import Trash from "./containers/Trash/Trash";

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
            <Route path={"/trash"} component={Trash}/>
        </Switch>
      </Router>
  );
}

export default App;
