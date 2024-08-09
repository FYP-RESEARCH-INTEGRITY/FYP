import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import { Toaster } from 'sonner'

const Layout = () => {
  // useState to toggle side menu
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  // check if we are on the signin or signup page
  const location = useLocation();
  const isOnboardingPage = (
    location.pathname.toLowerCase() === '/' ||
    location.pathname.toLowerCase() === '/signup' ||
    location.pathname.toLowerCase() === '/signin'
  );

  return (
    <div className="layout">
      {/* Display SideMenu on any other page */}
      { !isOnboardingPage && <SideMenu toggle={toggleSideMenu} /> }

      {/* Toggle button */}
      <div
        className="font-bold text-3xl p-2 absolute z-50 top-0 left-0 w-screen text-right cursor-pointer"
        onClick={() => setToggleSideMenu(!toggleSideMenu)}
      >
        &equiv;
      </div>
    
      {/* display a header on any other page */}
      { !isOnboardingPage && <SideMenu toggle={toggleSideMenu}/>}

      {/* button */}
      <div className="font-bold text-3xl p-2 absolute z-50 top-0 left-0  w-screen text-right cursor-pointer" onClick={() => setToggleSideMenu(!toggleSideMenu)}>&equiv;</div>

      <main>
        <Outlet />
        <Toaster richColors position='top-center' />
      </main>
    </div>
  );
};

export default Layout;
