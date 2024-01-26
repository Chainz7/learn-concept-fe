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
import JS_Home from "./pages/javascript/Home";
import JS_Introduction from "./pages/javascript/Introduction";
import JS_Variables from "./pages/javascript/Variables";
import JS_DataTypes from "./pages/javascript/DataTypes";
import React_Home from "./pages/react/Home";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="w-screen h-screen flex flex-col bg-background-default items-center">
          <Navbar />
          <main className="w-screen flex justify-between xl-min:w-136">
            <LeftSidebar />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="Html_Home" element={<Html_Home />} />
                <Route path="Css_Home" element={<Css_Home />} />
                <Route path="JS_Home" element={<JS_Home />} />
                <Route path="JS_Introduction" element={<JS_Introduction />} />
                <Route path="JS_Variables" element={<JS_Variables />} />
                <Route path="JS_DataTypes" element={<JS_DataTypes />} />
                <Route path="React_Home" element={<React_Home />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
            <RightSidebar />
          </main>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
