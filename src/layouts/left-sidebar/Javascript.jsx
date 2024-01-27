import { Link, useLocation } from "react-router-dom";

function Javascript() {
  const location = useLocation();
  const isLinkActive = (prefix) => {
    return location.pathname.startsWith(prefix);
  };

  return (
    <div
      className={`flex flex-col gap-6 pl-9 xl-min:px-0 ${
        isLinkActive("/js") ? "flex" : "hidden"
      }`}
    >
      {/* INFO Introduction */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Introduction"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Intro") ? "text-primary" : ""
          }`}
        >
          Introduction to JavaScript
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroWhatIs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroWhatIs">What is JavaScript?</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroHistory")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroHistory">History of JavaScript</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroVersion")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroVersion">JavaScript Versions</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_IntroHowToRun")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_IntroHowToRun">How to Run JavaScript?</Link>
        </div>
      </section>

      {/* INFO Variables */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Variables"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Var") ? "text-primary" : ""
          }`}
        >
          All About Variables
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_VarVariable")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_VarVariable">Variable Declarations</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_VarHoisting")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_VarHoisting">Hoisting</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_VarNaming")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_VarNaming">Variable Naming Rules</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_VarScope")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_VarScope">Variable Scopes</Link>
        </div>
      </section>

      {/* INFO Data Types */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_DataTypes"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_DataT") ? "text-primary" : ""
          }`}
        >
          Data Types
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DataTPrimitive")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DataTPrimitive">Primitive Types</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DataTObject")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DataTObject">Object</Link>
        </div>
      </section>

      {/* INFO Data Structures */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_DataStructures"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_DataS") ? "text-primary" : ""
          }`}
        >
          Data Structures
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DataSIndexed")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DataSIndexed">Indexed Collections</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DataSKeyed")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DataSKeyed">Keyed Collections</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DataSJSON")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DataSJSON">JSON</Link>
        </div>
      </section>

      {/* INFO Equality Comparisons */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_EqualityComparisons"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Equ") ? "text-primary" : ""
          }`}
        >
          Equality Comparisons
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_EquOperator")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_EquOperator">Value Comparison Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_EquAlgorithm")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_EquAlgorithm">Equality Algorithm</Link>
        </div>
      </section>

      {/* INFO Loops */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Loops"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Loop") ? "text-primary" : ""
          }`}
        >
          Loops and Iterations
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_LoopForLoop")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_LoopForLoop">For Statement</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_LoopDoWhile")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_LoopDoWhile">Do ... While Statement</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_LoopWhile")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_LoopWhile">While Statement</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_LoopBreakContinue")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_LoopBreakContinue">Break / Continue</Link>
        </div>
      </section>

      {/* INFO Control Flow */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_ControlFlow"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Con") ? "text-primary" : ""
          }`}
        >
          Control Flow
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ConConditional")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ConConditional">Conditional Statement</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ConExceptionHandling")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ConExceptionHandling">Exception Handling</Link>
        </div>
      </section>

      {/* INFO Expressions and Operators */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_ExpressionOperators"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Exp") ? "text-primary" : ""
          }`}
        >
          Expressions and Operators
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpAssignment")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpAssignment">Assignment Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpComparison")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpComparison">Comparison Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpArithmetic")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpArithmetic">Arithmetic Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpBitWise")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpBitWise">Bitwise Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpLogical")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpLogical">Logical Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpBigInt")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpBigInt">BigInt Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpString")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpString">String Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpConditional")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpConditional">Conditional Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpComma")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpComma">Comma Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpUnary")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpUnary">Unary Operators</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ExpRelational")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ExpRelational">Relational Operators</Link>
        </div>
      </section>

      {/* INFO Functions */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Functions"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Fun") ? "text-primary" : ""
          }`}
        >
          Functions
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_FunParameter")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_FunParameter">Function Parameters</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_FunArrow")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_FunArrow">Arrow Functions</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_FunIIFEs")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_FunIIFEs">IIFEs</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_FunArgument")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_FunArgument">Arguments Object</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_FunScope")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_FunScope">Scope and Function Stacks</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_FunBuiltIn")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_FunBuiltIn">Built-in Functions</Link>
        </div>
      </section>

      {/* INFO Strict */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Strict"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Strict") ? "text-primary" : ""
          }`}
        >
          Strict Mode
        </Link>
      </section>

      {/* INFO This Keyword */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_This"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_This") ? "text-primary" : ""
          }`}
        >
          This Keyword
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisBorrowing")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisBorrowing">Function Borrowing</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisExplicitBinding")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisExplicitBinding">Explicit Binding</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisMethod")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisMethod">In a Method</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisFunction")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisFunction">In a Function</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisAlone")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisAlone">Using it Alone</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisEventHandler")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisEventHandler">In Event Handlers</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ThisArrowFunction")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ThisArrowFunction">In Arrow Function</Link>
        </div>
      </section>

      {/* INFO Asynchronus */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Asynchronus"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Asy") ? "text-primary" : ""
          }`}
        >
          Asynchronus
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_AsySetTimeout")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_AsySetTimeout">SetTimeout</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_AsySetInterval")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_AsySetInterval">setInterval</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_AsyCallback")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_AsyCallback">Callbacks</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_AsyPromise")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_AsyPromise">Promises</Link>
        </div>
      </section>

      {/* INFO Working with API */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Api"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Api") ? "text-primary" : ""
          }`}
        >
          Working with APIs
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ApiHttpRequest")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ApiHttpRequest">XMLHTTPRequest</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ApiFetch")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ApiFetch">Fetch</Link>
        </div>
      </section>

      {/* INFO Classes */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Classes"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Classes") ? "text-primary" : ""
          }`}
        >
          Classes
        </Link>
      </section>

      {/* INFO Iterators and Generators */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_IteratorsGenerators"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_IteratorsGenerators") ? "text-primary" : ""
          }`}
        >
          Iterators and Generators
        </Link>
      </section>

      {/* INFO Modules*/}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_Modules"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Mod") ? "text-primary" : ""
          }`}
        >
          Modules
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ModCommonJS")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ModCommonJS">CommonJS</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_ModECMAScript")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_ModECMAScript">ECMAScript Modules</Link>
        </div>
      </section>

      {/* INFO Memory Management*/}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_MemoryManagement"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Mem") ? "text-primary" : ""
          }`}
        >
          Memory Management
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_MemLifecylce")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_MemLifecylce">Memory Lifecycle</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_MemGarbage")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_MemGarbage">Garbage Collections</Link>
        </div>
      </section>

      {/* INFO Chrome Dev Tools */}
      <section className="flex flex-col flex-wrap">
        <Link
          to="/js_DevTools"
          className={`mb-1 text-text-main font-normal text-headline-2 md-max:text-body transition 300 ${
            isLinkActive("/js_Dev") ? "text-primary" : ""
          }`}
        >
          Chrome Dev Tools
        </Link>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DevIssues")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DevIssues">Debugging Issues</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DevMemory")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DevMemory">Debugging Memory Leaks</Link>
        </div>
        <div
          className={`flex pl-6 py-1 border-l-2 border-text-paragraph-fade hover:text-text-main hover:border-text-main transition 300 ${
            isLinkActive("/js_DevPerformance")
              ? "border-secondary text-secondary font-normal"
              : ""
          }`}
        >
          <Link to="js_DevPerformance">Debugging Performance</Link>
        </div>
      </section>
    </div>
  );
}

export default Javascript;
