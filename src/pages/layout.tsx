import React from "react";
import "./globals.css";
import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          color: "teal",
          fontSize: "30",
        }}
      >
        <div>
          <Link to="/">home </Link>
        </div>
        <div>
          <Link to="/about">about </Link>
        </div>
      </div>

      <Outlet />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          color: "GrayText",
          fontSize: "30",
          backgroundColor: "teal",
        }}
      >
        copyRight @mishota
      </div>
    </div>
  );
}
