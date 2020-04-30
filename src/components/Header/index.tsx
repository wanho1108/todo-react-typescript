import React from 'react';
import Navigation from '../../components/Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
};

export default React.memo(Header);
