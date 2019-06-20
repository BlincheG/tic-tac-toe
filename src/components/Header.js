import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Домашняя страница</Link>
          </li>
          <li>
            <Link to="/about/">О</Link>
          </li>
          <li>
            <Link to="/counter">Счетчик</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;