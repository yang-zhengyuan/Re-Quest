import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import BottomNav from './components/bottomnav.jsx';

import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FontIcon from 'material-ui/FontIcon';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="Jason Bourne"
      subtitle="Emergency Responder"
      avatar="images/pexels-photo1.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Jason Bourne" subtitle="Emergency Responder" />}
    >
      <img src="images/pexels-photo1.jpg" alt="" />
    </CardMedia>
    <CardTitle title="123 rescues" subtitle="CPR certified, owns truck" />

    <CardActions>
      <FlatButton label="See quest" onClick={()=>{FlowRouter.go('quest_list')}}/>
      <FlatButton label="Post quest" onClick={()=>{FlowRouter.go('quest_create')}}/>
    </CardActions>
  </Card>
);

//     <CardText>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>

class AppBarExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    console.log('clicked');
    this.setState({open: !this.state.open});

  }

  render() {
    return (
      <div>
        <AppBar
          title="Profile"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          // onRightIconButtonTouchTap={this.handleToggle}
          // onTitleTouchTap={this.handleToggle}
          zDepth={1}
        />
        <Drawer open={this.state.open} zDepth={2}>
          <MenuItem  style={{marginTop: 30}} onTouchTap={()=>FlowRouter.go('/profile')}>Profile</MenuItem>
          <MenuItem>Requests</MenuItem>
        </Drawer>
      </div>
    );
  }
}


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

class ProfilePage extends Component {
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

          <AppBarExample/>

          <CardExampleWithAvatar/>

          <BottomNav />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ProfilePage;



