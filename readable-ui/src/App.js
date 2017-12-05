import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Category from './Category'

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Category Title="Category-1" />
          <Category Title="Category-2" />
          <Category Title="Category-3" />

          <div>

          </div>
        </div>

        {/* <div>
          <Paper style={style}>
            <Menu desktop={true} width={320}>
              <MenuItem primaryText="Single" insetChildren={true} />
              <MenuItem primaryText="1.15" insetChildren={true} />
              <MenuItem primaryText="Double" insetChildren={true} />
              <MenuItem
                primaryText="Custom: 1.2"
                checked={true}
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem
                    primaryText="Show"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                      <MenuItem primaryText="Show Level 2" />,
                      <MenuItem primaryText="Grid lines" checked={true} />,
                      <MenuItem primaryText="Page breaks" insetChildren={true} />,
                      <MenuItem primaryText="Rules" checked={true} />,
                    ]}
                  />,
                  <MenuItem primaryText="Grid lines" checked={true} />,
                  <MenuItem primaryText="Page breaks" insetChildren={true} />,
                  <MenuItem primaryText="Rules" checked={true} />,
                ]}
              />
              <Divider />
              <MenuItem primaryText="Add space before paragraph" />
              <MenuItem primaryText="Add space after paragraph" />
              <Divider />
              <MenuItem primaryText="Custom spacing..." />
            </Menu>
          </Paper>
        </div> */}

      </MuiThemeProvider>
    );
  }
}

export default App;
