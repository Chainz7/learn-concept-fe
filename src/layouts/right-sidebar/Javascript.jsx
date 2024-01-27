import { Link, useLocation } from "react-router-dom";

function Javascript() {
  const location = useLocation();
  const isLinkActive = (prefix) => {
    return location.pathname.startsWith(prefix);
  };

  return (
    <div
      className={`flex flex-col gap-6 xl-min:px-0 ${
        isLinkActive("/js") ? "flex" : "hidden"
      }`}
    >
      {/* INFO Introduction */}
      <section className="flex flex-col flex-wrap">
        <span
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300`}
        >
          Core Concept
        </span>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Async vs Defer Script Loading</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Var vs Let vs Const</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Function Basics</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Callbacks</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Arrow Functions</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Hoisting</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Scoping</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Closures</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Strict Equality</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Objects / Arrays</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Reference Vs Value</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">DOM Traversal</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">DOM Manipulation</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Event Listeners</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Control Flow</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Promises</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Async Await</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Fetch</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Browser Storage</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Event Loop</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Modules</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Null Vs Undefined</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Recursion</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Bundlers</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Array Methods</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Template Literals</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">Destructoring/Spread Operator</Link>
        </div>
      </section>
    </div>
  );
}

export default Javascript;
