import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Login extends Component {
  render(){
    return(
      <h1>Login</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        
      <div className="App">
      <Link to='/login'><span onClick={this.props.onloginClick}>Login</span></Link>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Router>
    );
  }
}

class Main extends Component{
  constructor(props){
    super(props);
    this.state={view: 'App'}
  }
  onloginClick=()=>{
    console.log("Login Area was clicked!!")
    this.setState({view: 'login'})
  }
  render(){
    // var onloginclick = this.onloginClick;
    return(
      <Router>
        <div>
        {
          this.state.view==='App'?<Route exact path="/" render={()=><App onloginClick={this.onloginClick} />}/>: <Route path="/login" render={()=><Login/>} />
        }
          {/* <Route exact path="/" render={()=><App onloginClick={this.onloginClick} />}/>
          <Route exact path="/login" component={Login}/> */}
        </div>
      </Router>
    )
  }
  
}

export default Main;
