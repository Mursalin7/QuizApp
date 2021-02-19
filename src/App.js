import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Page1 from './components/Page1' ;
import Page2 from './components/Page2' ;
import Result from './components/Result' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SignUp/>
      
      </header>
      <Router>
        <Switch>
          <Route path="/" component = {App}/>
          <Route path="/signin" component = {SignIn}/>
          <Route path="/page1" component = {Page1}/>
          <Route path="/page2" component = {Page2}/>
          <Route path="/result" component = {Result}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
