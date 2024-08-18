import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { getAuth, signOut } from "firebase/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        setIsOpen(false);
        navigate('/signin');
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const navigation = [
    {
      name: "Home",
      href: "/upload",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
        >
          <path
            fill="currentColor"
            d="m16.667 6.667-5-4.384a2.5 2.5 0 0 0-3.334 0l-5 4.384A2.5 2.5 0 0 0 2.5 8.55v7.283a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V8.542a2.5 2.5 0 0 0-.833-1.875Zm-5 10H8.333V12.5a.833.833 0 0 1 .834-.833h1.666a.834.834 0 0 1 .834.833v4.167Zm4.166-.834a.833.833 0 0 1-.833.834h-1.667V12.5a2.5 2.5 0 0 0-2.5-2.5H9.167a2.5 2.5 0 0 0-2.5 2.5v4.167H5a.833.833 0 0 1-.833-.834V8.542a.833.833 0 0 1 .283-.625l5-4.375a.833.833 0 0 1 1.1 0l5 4.375a.834.834 0 0 1 .283.625v7.291Z"
          />
        </svg>
      ),
      current: true,
    },
    {
      name: "My Documents",
      href: "/documents",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
        >
          <path
            fill="currentColor"
            d="M8.333 10.833h-5a.833.833 0 0 0-.833.834v5a.833.833 0 0 0 .833.833h5a.833.833 0 0 0 .834-.833v-5a.833.833 0 0 0-.834-.834Zm-.833 5H4.167V12.5H7.5v3.333ZM16.667 2.5h-5a.833.833 0 0 0-.834.833v5a.833.833 0 0 0 .834.834h5a.833.833 0 0 0 .833-.834v-5a.833.833 0 0 0-.833-.833Zm-.834 5H12.5V4.167h3.333V7.5Zm.834 5.833H15v-1.666a.833.833 0 0 0-1.667 0v1.666h-1.666a.833.833 0 0 0 0 1.667h1.666v1.667a.833.833 0 0 0 1.667 0V15h1.667a.833.833 0 0 0 0-1.667ZM8.333 2.5h-5a.833.833 0 0 0-.833.833v5a.833.833 0 0 0 .833.834h5a.833.833 0 0 0 .834-.834v-5a.833.833 0 0 0-.834-.833Zm-.833 5H4.167V4.167H7.5V7.5Z"
          />
        </svg>
      ),
      current: false,
    },
    {
      name: "History",
      href: "/history",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
        >
          <path
            fill="currentColor"
            d="M9.167 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm0 15a6.666 6.666 0 1 1 0-13.333 6.666 6.666 0 0 1 0 13.333ZM10 9.942V5.833a.833.833 0 1 0-1.667 0V10.092c-.02.17.012.34.092.491l1.25 2.167a.836.836 0 1 0 1.45-.833L10 9.942Z"
          />
        </svg>
      ),
      current: false,
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M12 22c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 10 20h4c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 12 22Zm-8-3v-2h2v-7c0-1.383.417-2.612 1.25-3.687.833-1.075 1.917-1.779 3.25-2.113v-.7c0-.417.146-.77.438-1.062A1.451 1.451 0 0 1 12 2c.416 0 .77.145 1.063.438.293.293.438.647.437 1.062v.325a4.634 4.634 0 0 0-.375 1.05A5.062 5.062 0 0 0 13 6c0 1.383.488 2.563 1.463 3.538.975.975 2.154 1.463 3.537 1.462v6h2v2H4ZM18 9a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 6c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 18 3c.833 0 1.542.292 2.125.875S21 5.167 21 6s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 9Z"
          />
        </svg>
      ),
      current: false,
    },
  ];

  navigation.map((nav, index) => {
    if(window.location.pathname.includes(nav.href.toLocaleLowerCase())) {
      nav.current = true
    } else {
      nav.current = false
    }
  });
    
  return (
    <div className="fixed left-0 top-0 h-screen w-64 overflow-hidden bg-[#F9F6F9] transition-all duration-300">
      <div className="flex h-full flex-col p-5">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3 py-3">
            <LogoMark />
            <span className="whitespace-nowrap text-2xl font-semibold text-[#324054]">
              CiteScout
            </span>
          </div>
        </div>

        <nav>
          <ul className="flex flex-col gap-2 space-y-2">
            {navigation.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.href}
                  className={classNames(
                    nav.current
                      ? "bg-[#eef6ef] !fill-purple-600 text-purple-600"
                      : "fill-[#71839B] text-[#324054] hover:bg-purple-100/50 hover:text-purple-800",
                    "flex items-center gap-4 whitespace-nowrap rounded-md p-3 font-medium",
                  )}
                >
                  <span>{nav.icon}</span> <p>{nav.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-5">
          <button 
          onClick={() => setIsOpen(true)}
          className={classNames(
              "flex items-center gap-4 whitespace-nowrap rounded-md p-3 font-medium",
              "fill-[#71839B] text-[#324054] hover:bg-purple-100/50 hover:text-purple-800",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-8V7m6-2a2 2 0 00-2-2h-7a2 2 0 00-2 2v14a2 2 0 002 2h7a2 2 0 002-2v-1"
              />
            </svg>
            <p>Logout</p>
            </button>
        </div>
        {/* <Example open={open} setOpen={setIsOpen} /> */}
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  Confirm Logout
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to logout? Any unsaved changes will be lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Continue Logout
            </button>
            <button
              type="button"
              data-autofocus
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  </div>
);
}


function LogoMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
      <rect width={32} height={32} fill="#615793" rx={4} />
      <path fill="#fff" d="M16 23.2 9.765 12.4h12.47L16 23.2Z" />
    </svg>
  );
}
