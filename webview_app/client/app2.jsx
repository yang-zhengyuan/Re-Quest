import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import BottomNav from './components/bottomnav.jsx';
import AppBar from './components/appbar.jsx';

import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FontIcon from 'material-ui/FontIcon';



const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  container: {
    textAlign: 'center',
    height: "100%",
    overflowY: "auto",
  },
  root: {
    flex: '1 1 100%',
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column'
  },

  container2: {
    flex: '1 1 100%;',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto'
  },
};

class TabTemplate extends React.Component {
  render() {
    if (!this.props.selected) {
      return null;
    }

    return this.props.children;
  }
}

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }
  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>

          <AppBar/>

          <a href="/profile"><h1>Material-UI</h1>
          <h2>example project</h2></a>
          <RaisedButton
            label="Upload File"
            icon={<FontIcon className="material-icons">file_upload</FontIcon>} // material-ui-icons
            secondary={true}
            // onTouchTap={this.handleTouchTap}
          >
            <input
              onTouchTap={e => this.upload(e.target.files[0])}
              style={{ display: 'none' }}
              type="file"
            />
          </RaisedButton>

          <BottomNav />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;



