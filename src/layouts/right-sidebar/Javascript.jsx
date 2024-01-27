import { Link, useLocation } from "react-router-dom";

function Javascript() {
  const location = useLocation();
  const isLinkActive = (prefix) => {
    return location.pathname.startsWith(prefix);
  };

  return (
    <div className={`flex flex-col ${isLinkActive("/js") ? "flex" : "hidden"}`}>
      <Link to="js_introduction">Introduction</Link>
      <Link to="js_variables">Variables</Link>
      <Link to="js_datatypes">DataTypes</Link>
    </div>
  );
}

export default Javascript;
