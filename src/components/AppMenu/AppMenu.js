import React, { Component } from 'react';
import './app-menu.css';
import './app-menu-mobile.css';
import MenuHeader from './MenuHeader';
import MenuMain from './MenuMain';
import MenuFooter from './MenuFooter';
import { CSSTransition } from 'react-transition-group';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() { 
    return (
      <CSSTransition
        in={this.props.showMenu}
        timeout={300}
        classNames="app-menu"
        unmountOnExit
      >
        <nav className="app-menu">
          <div className="app-menu__wrapper">

            <MenuHeader closeMenu={this.props.closeMenu}/>
            <MenuMain />
            <MenuFooter />

          </div>
        </nav>
      </CSSTransition>
     );
  }
}
 
export default AppMenu;