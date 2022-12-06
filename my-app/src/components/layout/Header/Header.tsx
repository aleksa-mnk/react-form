import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../../core/config/route';

class Header extends React.Component {
  render() {
    return (
      <header className="header-outer">
        <div className="header" data-testid="header-test">
          {navData.map(({ title, path }) => (
            <div key={path} className="header__item">
              <NavLink
                data-testid={`${title}-link`}
                end
                to={path}
                className={({ isActive }) => (isActive ? 'header__link--active' : 'header__link')}
              >
                {title}
              </NavLink>
            </div>
          ))}
          {/* <div className="header__logo"></div> */}
        </div>
      </header>
    );
  }
}

export default Header;
