import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppMenu from './components/AppMenu/AppMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: false
    }
  }

  closeMenu = () => {
    this.setState({ showMenu: false });
  }

  openMenu = () => {
    this.setState({ showMenu: true });
  }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <FontAwesomeIcon icon={faBars} onClick={this.openMenu} className="app-menu-icon"/>
        </header>

        <AppMenu closeMenu={this.closeMenu} showMenu={this.state.showMenu}/>
      </div>
    );
  }
}
 
export default App;

