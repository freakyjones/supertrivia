import React from 'react';
import Landing from './landingpage/landingpage';
import css from '../style/app.css'
import Compare from './comparepage/comparepage';
import Home from './homepage/homepage';
import Game from './gamepage/gamepage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Details from './homepage/details/homedetails';
const App=()=>{
    return(
     
    <Router >
        <div className="app">
     <Switch>
    <Route path="/" exact component={Landing}/>
    <Route path="/home" exact component={Home}/>
    <Route path ="/details" component={Details}/>
    <Route path="/compare" component={Compare} />
    <Route path="/game" component={Game}/>
    </Switch>       
        </div>
    </Router>
    )
  
}

export default App;