import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostDetails from './PostDetails'
import CategoryList from './CategoryList'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Switch>
              <Route exact path='/' component={CategoryList} />
              <Route path='/posts/:postID' component={PostDetails} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
