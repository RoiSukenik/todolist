import React from "react";
import {Switch,Route, BrowserRouter as Router, Redirect}from 'react-router-dom';

import './css/App.css';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import {Home,FinishedTasks,Trash,Tasks} from './containers'

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path={"/"} >
              <Redirect to={"/home"}/>
            </Route>
            <Route path={"/home"} component={Home}/>
            <Route path={"/tasks"} component={Tasks}/>
            <Route path={"/finishedtasks"} component={FinishedTasks}/>
            <Route path={"/trash"} component={Trash}/>
        </Switch>
      </Router>
  );
}

export default App;
