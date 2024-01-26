import { Outlet, Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <>
      <nav className="font-pixel text-headline-2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default RightSidebar;
