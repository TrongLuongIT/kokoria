"use client";
// import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="container-fluid px-0 sticky-header">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
}