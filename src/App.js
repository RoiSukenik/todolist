import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from "./containers/Home/Home";
import History from "./containers/History/History";

import {Switch,Route, BrowserRouter as Router}from 'react-router-dom';
import {React} from "react";


function App() {


  return (
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
          <Route path={"/home"} component={Home}/>
          <Route path={"/history"} component={History}/>
        </Switch>
      </Router>


  );
}

export default App;
