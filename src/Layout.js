import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner'

const Layout = () => {




  return (
    <div className="layout">

      <main>
        <Outlet />
        <Toaster richColors position='top-center' />
      </main>

    </div>
  );
};

export default Layout;
