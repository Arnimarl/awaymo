import React from 'react';

const MenuMain = () => {
  return ( 
    <main className="app-menu__main">
      <div className="mobile-hide">
        <ul className="app-menu__list">
          <li><a className="app-menu__list-link" href="">Home</a></li>
          <li><a className="app-menu__list-link" href="">Flights</a></li>
          <li><a className="app-menu__list-link" href="">About Us</a></li>
          <li><a className="app-menu__list-link" href="https://intercom.help/awaymo" target="_blank">FAQ</a></li>
          <li><a className="app-menu__list-link" href="https://intercom.help/awaymo" target="_blank">Support</a></li>
          <li><a className="app-menu__list-link" href="">Contact Us</a></li>
        </ul>
      </div>

      <div className="mobile-full">
        <div className="app-menu__user">
          <div className="app-menu__user-avatar">
            <img src="/avatar.png" />
          </div>

          <div className="app-menu__user-info">
            <p>Dominik Biel</p>
            <p className="mobile-hide">£1,500.00 Available</p>
            <p className="desktop-hide">Available Balance</p>
            <p className="desktop-hide">£1,500.00</p>
          </div>
        </div>

        <ul className="app-menu__list">
          <li><a className="app-menu__list-link app-menu__list-link--first" href="">Profile</a></li>
          <li><a className="app-menu__list-link" href="">My Bookings</a></li>
          <li><a className="app-menu__list-link" href="">My Payments</a></li>
          <li><a className="app-menu__list-link desktop-hide" href="">Support</a></li>
          <li><a className="app-menu__list-link desktop-hide" href="">Contact Us</a></li>
          <li><a className="app-menu__list-link" href="">Log Out</a></li>
          <li><a className="app-menu__list-link mobile-hide" href="">Resume Application</a></li>
          <li><a className="app-menu__list-link desktop-hide" href="">About</a></li>
          <li><a className="app-menu__list-link app-menu__list-link--last desktop-hide" href="">FAQ</a></li>
        </ul>
      </div>
    </main>
  );
}
 
export default MenuMain;