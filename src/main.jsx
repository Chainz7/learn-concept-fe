import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./layouts/Navbar";
import LeftSidebar from "./layouts/LeftSidebar";
import RightSidebar from "./layouts/RightSidebar";
import Home from "./pages/Home";
import Html_Home from "./pages/html/Home";
import Css_Home from "./pages/css/Home";

import {
  JS_Home,
  Asynchronus,
  AsyCallback,
  AsyPromise,
  AsySetInterval,
  AsySetTimeout,
  Classes,
  ControlFlow,
  ConConditional,
  ConExceptionHandling,
  DataStructures,
  DataSIndexed,
  DataSKeyed,
  DataSJSON,
  DataTypes,
  DataTObject,
  DataTPrimitive,
  DevTools,
  DevIssues,
  DevMemory,
  DevPerformance,
  EqualityComparisons,
  EquOperator,
  EquAlgorithm,
  ExpressionOperators,
  ExpArithmetic,
  ExpAssignment,
  ExpBigInt,
  ExpBitWise,
  ExpComma,
  ExpComparison,
  ExpConditional,
  ExpLogical,
  ExpRelational,
  ExpString,
  ExpUnary,
  Functions,
  FunArgument,
  FunArrow,
  FunBuiltIn,
  FunParameter,
  FunIIFEs,
  FunScope,
  Introduction,
  IntroWhatIs,
  IntroHistory,
  IntroVersion,
  IntroHowToRun,
  IteratorsGenerators,
  Loops,
  LoopBreakContinue,
  LoopForLoop,
  LoopDoWhile,
  LoopWhile,
  MemoryManagement,
  MemGarbage,
  MemLifecylce,
  Modules,
  ModCommonJS,
  ModECMAScript,
  Strict,
  This,
  ThisAlone,
  ThisArrowFunction,
  ThisEventHandler,
  ThisExplicitBinding,
  ThisFunction,
  ThisFunctionBorrowing,
  ThisMethod,
  Variables,
  VarVariable,
  VarHoisting,
  VarScope,
  VarNaming,
  WorkingApi,
  ApiFetch,
  ApiHttpRequest,
} from "./pages/javascript";

import React_Home from "./pages/react/Home";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="w-screen h-screen flex flex-col bg-background-default items-center overflow-x-hidden">
          <Navbar />
          <main className="w-screen h-9/10 flex justify-between gap-10 lay-max:justify-center xl-min:w-136">
            <LeftSidebar />
            <article className="w-7/12 bg-background-light text-text-main md-max:w-9/12">
              <Routes>
                <Route path="/">
                  {/* INFO Home */}
                  <Route index element={<Home />} />
                  {/* INFO HTML */}
                  <Route path="Html_Home" element={<Html_Home />} />
                  {/* INFO CSS */}
                  <Route path="Css_Home" element={<Css_Home />} />
                  {/* INFO JavaScript */}
                  <Route path="js_Home" element={<JS_Home />} />
                  <Route path="js_Asynchronus" element={<Asynchronus />} />
                  <Route path="js_AsyCallback" element={<AsyCallback />} />
                  <Route path="js_AsyPromise" element={<AsyPromise />} />
                  <Route path="js_Asynchronus" element={<Asynchronus />} />
                  <Route
                    path="js_AsySetInterval"
                    element={<AsySetInterval />}
                  />
                  <Route path="js_AsySetTimeout" element={<AsySetTimeout />} />
                  <Route path="js_Classes" element={<Classes />} />
                  <Route path="js_ControlFlow" element={<ControlFlow />} />
                  <Route
                    path="js_ConConditional"
                    element={<ConConditional />}
                  />
                  <Route
                    path="js_ConExceptionHandling"
                    element={<ConExceptionHandling />}
                  />
                  <Route
                    path="js_DataStructures"
                    element={<DataStructures />}
                  />
                  <Route path="js_DataSIndexed" element={<DataSIndexed />} />
                  <Route path="js_DataSKeyed" element={<DataSKeyed />} />
                  <Route path="js_DataSJSON" element={<DataSJSON />} />
                  <Route path="js_DataTypes" element={<DataTypes />} />
                  <Route path="js_DataTObject" element={<DataTObject />} />
                  <Route
                    path="js_DataTPrimitive"
                    element={<DataTPrimitive />}
                  />
                  <Route path="js_DevTools" element={<DevTools />} />
                  <Route path="js_DevIssues" element={<DevIssues />} />
                  <Route path="js_DevMemory" element={<DevMemory />} />
                  <Route
                    path="js_DevPerformance"
                    element={<DevPerformance />}
                  />
                  <Route
                    path="js_EqualityComparisons"
                    element={<EqualityComparisons />}
                  />
                  <Route path="js_EquOperator" element={<EquOperator />} />
                  <Route path="js_EquAlgorithm" element={<EquAlgorithm />} />
                  <Route
                    path="js_ExpressionOperators"
                    element={<ExpressionOperators />}
                  />
                  <Route path="js_ExpArithmetic" element={<ExpArithmetic />} />
                  <Route path="js_ExpAssignment" element={<ExpAssignment />} />
                  <Route path="js_ExpBigInt" element={<ExpBigInt />} />
                  <Route path="js_ExpBitWise" element={<ExpBitWise />} />
                  <Route path="js_ExpComma" element={<ExpComma />} />
                  <Route path="js_ExpComparison" element={<ExpComparison />} />
                  <Route
                    path="js_ExpConditional"
                    element={<ExpConditional />}
                  />
                  <Route path="js_ExpLogical" element={<ExpLogical />} />
                  <Route path="js_ExpRelational" element={<ExpRelational />} />
                  <Route path="js_ExpString" element={<ExpString />} />
                  <Route path="js_ExpUnary" element={<ExpUnary />} />
                  <Route path="js_Functions" element={<Functions />} />
                  <Route path="js_FunArgument" element={<FunArgument />} />
                  <Route path="js_FunArrow" element={<FunArrow />} />
                  <Route path="js_FunBuiltIn" element={<FunBuiltIn />} />
                  <Route path="js_FunParameter" element={<FunParameter />} />
                  <Route path="js_FunIIFEs" element={<FunIIFEs />} />
                  <Route path="js_FunScope" element={<FunScope />} />
                  <Route path="js_Introduction" element={<Introduction />} />
                  <Route path="js_IntroWhatIs" element={<IntroWhatIs />} />
                  <Route path="js_IntroHistory" element={<IntroHistory />} />
                  <Route path="js_IntroVersion" element={<IntroVersion />} />
                  <Route path="js_IntroHowToRun" element={<IntroHowToRun />} />
                  <Route
                    path="js_IteratorsGenerators"
                    element={<IteratorsGenerators />}
                  />
                  <Route path="js_Loops" element={<Loops />} />
                  <Route
                    path="js_LoopBreakContinue"
                    element={<LoopBreakContinue />}
                  />
                  <Route path="js_LoopForLoop" element={<LoopForLoop />} />
                  <Route path="js_LoopDoWhile" element={<LoopDoWhile />} />
                  <Route path="js_LoopWhile" element={<LoopWhile />} />
                  <Route
                    path="js_MemoryManagement"
                    element={<MemoryManagement />}
                  />
                  <Route path="js_MemGarbage" element={<MemGarbage />} />
                  <Route path="js_MemLifecylce" element={<MemLifecylce />} />
                  <Route path="js_Modules" element={<Modules />} />
                  <Route path="js_ModCommonJS" element={<ModCommonJS />} />
                  <Route path="js_ModECMAScript" element={<ModECMAScript />} />
                  <Route path="js_Strict" element={<Strict />} />
                  <Route path="js_This" element={<This />} />
                  <Route path="js_ThisAlone" element={<ThisAlone />} />
                  <Route
                    path="js_ThisArrowFunction"
                    element={<ThisArrowFunction />}
                  />
                  <Route
                    path="js_ThisEventHandler"
                    element={<ThisEventHandler />}
                  />
                  <Route
                    path="js_ThisExplicitBinding"
                    element={<ThisExplicitBinding />}
                  />
                  <Route path="js_ThisFunction" element={<ThisFunction />} />
                  <Route
                    path="js_ThismBorrowing"
                    element={<ThisFunctionBorrowing />}
                  />
                  <Route path="js_ThisMethod" element={<ThisMethod />} />
                  <Route path="js_Variables" element={<Variables />} />
                  <Route path="js_VarVariable" element={<VarVariable />} />
                  <Route path="js_VarHoisting" element={<VarHoisting />} />
                  <Route path="js_VarScope" element={<VarScope />} />
                  <Route path="js_VarNaming" element={<VarNaming />} />
                  <Route path="js_Api" element={<WorkingApi />} />
                  <Route path="js_ApiFetch" element={<ApiFetch />} />
                  <Route
                    path="js_ApiHttpRequest"
                    element={<ApiHttpRequest />}
                  />

                  {/* INFO React */}
                  <Route path="React_Home" element={<React_Home />} />
                  {/* INFO 404 */}
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </article>
            <RightSidebar />
          </main>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
