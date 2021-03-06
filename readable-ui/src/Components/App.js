import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PostDetails from "./PostDetails";
import CategoryList from "./CategoryList";
import CategoryView from "./CategoryView";
import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <Link
                to={`/`}
                className="no-text-decoration"
                style={{ color: "white" }}
              >
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Readable</h1>
              </Link>
            </header>
            <Switch>
              <Route exact path="/" component={CategoryList} />
              <Route path="/:category/:postID" component={PostDetails} />
              <Route path="/:category" component={CategoryView} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
