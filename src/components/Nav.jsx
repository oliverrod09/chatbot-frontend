import React from 'react'
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import BtnMode from "./BtnMode";


import { Link } from "react-router-dom";
import IconNav from './IconNav';

function Nav({sesion, handleMode, check}) {
    const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </Typography>
      <BtnMode handleMode={handleMode} check={check}></BtnMode>
      {/* <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/login"} className="flex items-center">
          Login
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/register"} className="flex items-center">
          Register
        </Link>
      </Typography> */}
      {/* <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/regchat"} className="flex items-center">
          Crear Chat
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/listchat"} className="flex items-center">
          Chats
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={"/logout"} className="flex items-center">
          Cerrar sesion
        </Link>
      </Typography> */}
    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-blue-500 dark:border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}
            className="mr-4 cursor-pointer py-1.5 text-white font-semibold"
          >
            <i className='inline-block w-5 h-5 mr-2 bg-cover bg-center bg-no-repeat bg-[url(/icon.svg)]'></i>
            CHATBOT ISOS
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconNav sesion={sesion}></IconNav>
            {/* <Button
              size="sm"
              className="hidden lg:inline-block bg-gradient-to-r from-blue-900 to-blue-700"
            >
              <span>Buy Now</span>
            </Button> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
  );
}

export default Nav