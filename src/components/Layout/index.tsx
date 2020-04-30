import React from 'react';
import Header from '../../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <div>Footer</div>
    </React.Fragment>
  );
};

export default Layout;
