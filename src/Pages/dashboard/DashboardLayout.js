import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { Toaster } from "sonner";

export default function Layout() {
  // useState to toggle side menu
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  // check if we are on the signin or signup page
  const location = useLocation();
  const isOnboardingPage =
    location.pathname.toLowerCase() === "/" ||
    location.pathname.toLowerCase() === "/signup" ||
    location.pathname.toLowerCase() === "/signin";

  return (
    <div className="layout">
      {/* Display SideMenu on any other page */}
      {!isOnboardingPage && <SideMenu toggle={toggleSideMenu} />}

      {/* hearder */}
      {/* {!isOnboardingPage && (
        <header
          className="left-0 top-0 bg-[#32324D] z-50 w-screen cursor-pointer p-2 text-right text-3xl font-bold"
          onClick={() => setToggleSideMenu(!toggleSideMenu)}
        >
          &equiv;
        </header>
      )} */}

      <main className="pl-64">
        <Outlet />
        <Toaster richColors position="top-center" />
      </main>
    </div>
  );
};