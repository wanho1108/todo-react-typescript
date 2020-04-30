import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
