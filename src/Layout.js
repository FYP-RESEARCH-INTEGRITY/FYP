import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {Toaster} from 'sonner'

const Layout = () => {
  return (
    <div className="layout">
    
      <main>
     
        <Outlet />
        <Toaster richColors position='top-center'/>
      </main>

    </div>
  );
};

export default Layout;
