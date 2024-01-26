import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isNavActive, setNavActive] = useState(false);

  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
  };

  const toggleNavActive = () => {
    setNavActive(!isNavActive);
  };

  return (
    <>
      <nav className="w-screen flex justify-center p-5 px-6 pr-9 bg-background-default font-roboto text-headline-2 font-normal text-text-main sm-max:p-0">
        <div className="w-screen flex justify-between items-center xl-min:w-136 sm-max:justify-center">
          <ul className="flex items-center justify-center gap-8 md-max:text-caption sm-max:hidden">
            <li>
              <Link
                to="/"
                className={`px-3 py-1 border-solid border-1 border-background-default rounded-md text-text-white hover:border-primary-default hover:text-text-color-1 ${
                  isLinkActive("/")
                    ? "border-primary-default text-text-color-1"
                    : ""
                } transition duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/html_home"
                className={`px-3 py-1 border-solid border-1 border-background-default rounded-md text-text-white hover:border-primary-default hover:text-text-color-1 ${
                  isLinkActive("/html_home")
                    ? "border-primary-default text-text-color-1"
                    : ""
                } transition duration-300`}
              >
                HTML
              </Link>
            </li>
            <li>
              <Link
                to="/css_home"
                className={`px-3 py-1 border-solid border-1 border-background-default rounded-md text-text-white hover:border-primary-default hover:text-text-color-1 ${
                  isLinkActive("/css_home")
                    ? "border-primary-default text-text-color-1"
                    : ""
                } transition duration-300`}
              >
                CSS
              </Link>
            </li>
            <li>
              <Link
                to="/js_home"
                className={`px-3 py-1 border-solid border-1 border-background-default rounded-md text-text-white hover:border-primary-default hover:text-text-color-1 ${
                  isLinkActive("/js_home")
                    ? "border-primary-default text-text-color-1"
                    : ""
                } transition duration-300`}
              >
                JavaScript
              </Link>
            </li>
            <li>
              <Link
                to="/react_home"
                className={`px-3 py-1 border-solid border-1 border-background-default rounded-md text-text-white hover:border-primary-default hover:text-text-color-1 ${
                  isLinkActive("/react_home")
                    ? "border-primary-default text-text-color-1"
                    : ""
                } transition duration-300`}
              >
                React JS
              </Link>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-8 md-max:text-caption sm-max:hidden">
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#7e57c2"
                    d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
                  ></path>
                  <path
                    fill="#7e57c2"
                    d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
                  ></path>
                  <path
                    fill="#7e57c2"
                    d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>

          {/** Mobile Version */}
          <button className="py-4 sm-min:hidden" onClick={toggleNavActive}>
            Hamburger
          </button>
          <ul
            className={`w-full absolute ${
              isNavActive ? "flex" : "hidden"
            } flex-col gap-4 py-4 bg-background-default sm-min:hidden`}
          >
            <Link
              className={`w-full flex justify-center pb-4 border-solid border-b-1 border-background-light hover:border-text-default text-text-main hover:text-text-color-1 ${
                isLinkActive("/")
                  ? "border-primary-default text-primary-default"
                  : ""
              } transition duration-300`}
              to="/"
              onClick={toggleNavActive}
            >
              Home
            </Link>
            <Link
              className={`w-full flex justify-center pb-4 border-solid border-b-1 border-background-light hover:border-text-default text-text-main hover:text-text-color-1 ${
                isLinkActive("/html_home")
                  ? "border-primary-default text-primary-default"
                  : ""
              } transition duration-300`}
              to="/html_home"
              onClick={toggleNavActive}
            >
              HTML
            </Link>
            <Link
              className={`w-full flex justify-center pb-4 border-solid border-b-1 border-background-light hover:border-text-default text-text-main hover:text-text-color-1 ${
                isLinkActive("/css_home")
                  ? "border-primary-default text-primary-default"
                  : ""
              } transition duration-300`}
              to="/css_home"
              onClick={toggleNavActive}
            >
              CSS
            </Link>
            <Link
              className={`w-full flex justify-center pb-4 border-solid border-b-1 border-background-light hover:border-text-default text-text-main hover:text-text-color-1 ${
                isLinkActive("/js_home")
                  ? "border-primary-default text-primary-default"
                  : ""
              } transition duration-300`}
              to="/js_home"
              onClick={toggleNavActive}
            >
              JavaScript
            </Link>
            <Link
              className={`w-full flex justify-center pb-4 border-solid border-b-1 border-background-light hover:border-text-default text-text-main hover:text-text-color-1 ${
                isLinkActive("/react_home")
                  ? "border-primary-default text-primary-default"
                  : ""
              } transition duration-300`}
              to="/react_home"
              onClick={toggleNavActive}
            >
              React
            </Link>
            <button
              className={`w-full flex justify-center border-solid border-background-light hover:border-primary-default text-text-main hover:text-text-color-1 transition duration-300`}
              onClick={toggleNavActive}
            >
              Back
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
