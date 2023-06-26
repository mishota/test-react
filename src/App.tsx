import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/layout";
import Home from "./pages/Home";
import About from "./pages/about/About";
import AboutId from "./pages/about/aboutId/AboutId";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about/:id" element={<RootLayout />}>
          <Route index element={<AboutId />} />
        </Route>
        <Route path="/about" element={<RootLayout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
