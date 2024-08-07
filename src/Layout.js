import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import {Toaster} from 'sonner'

const Layout = () => {
  // usestate to toggle sidemenu
  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  // check if we are on the signin or up page
  const location = useLocation();
  const isOnboardingPage = (
    location.pathname.toLocaleLowerCase() === '/' ||
    location.pathname.toLocaleLowerCase() === '/signup' ||
    location.pathname.toLocaleLowerCase() === '/signin'
  );

  return (
    <div className="layout">
      {/* display a header on any other page */}
      { !isOnboardingPage && <SideMenu toggle={toggleSideMenu}/>}

      {/* button */}
      <div className="font-bold text-3xl p-2 absolute z-50 top-0 left-0  w-screen text-right cursor-pointer" onClick={() => setToggleSideMenu(!toggleSideMenu)}>&equiv;</div>

      <main>
     
        <Outlet />
        <Toaster richColors position='top-center'/>
      </main>

    </div>
  );
};

export default Layout;
