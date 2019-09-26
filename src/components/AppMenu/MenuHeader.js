import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoSvg from '../../assets/logo-svg';

const MenuHeader = (props) => {
  return ( 
    <header className="app-menu__header">
      <LogoSvg />

      <span onClick={() => {props.closeMenu()}} className="app-menu__close">
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </header>
  );
}
 
export default MenuHeader;