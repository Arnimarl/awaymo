import React, { Component } from 'react';
import './app-menu.css';
import './app-menu-mobile.css';
import MenuHeader from './MenuHeader';
import MenuMain from './MenuMain';
import MenuFooter from './MenuFooter';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <nav className="app-menu">
        <div className="app-menu__wrapper">

          <MenuHeader />
          <MenuMain />
          <MenuFooter />

        </div>
      </nav>
     );
  }
}
 
export default AppMenu;