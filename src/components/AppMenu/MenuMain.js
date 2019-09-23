import React from 'react';

const MenuMain = () => {
  return ( 
    <main className="app-menu__main">
      <div>
        <ul className="app-menu__list">
          <li><a className="app-menu__list-link" href="">Home</a></li>
          <li><a className="app-menu__list-link" href="">Flights</a></li>
          <li><a className="app-menu__list-link" href="">About Us</a></li>
          <li><a className="app-menu__list-link" href="https://intercom.help/awaymo" target="_blank">FAQ</a></li>
          <li><a className="app-menu__list-link" href="https://intercom.help/awaymo" target="_blank">Support</a></li>
          <li><a className="app-menu__list-link" href="">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <div className="app-menu__user">
          <div className="app-menu__user-avatar">
            <img src="/avatar.png" />
          </div>

          <div className="app-menu__user-info">
            <p>Dominik Biel</p>
            <p>£1,500.00 Available</p>
          </div>
        </div>

        <ul className="app-menu__list">
          <li><a className="app-menu__list-link" href="">Profile</a></li>
          <li><a className="app-menu__list-link" href="">My Bookings</a></li>
          <li><a className="app-menu__list-link" href="">My Payments</a></li>
          <li><a className="app-menu__list-link" href="">Log Out</a></li>
          <li><a className="app-menu__list-link" href="">Resume Application</a></li>
        </ul>
      </div>
    </main>
  );
}
 
export default MenuMain;