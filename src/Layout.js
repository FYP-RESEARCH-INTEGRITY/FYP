import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">

      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
