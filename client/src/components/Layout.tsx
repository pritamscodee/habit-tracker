import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Hero from "./Hero";

function Layout() {


  const location = useLocation();

  const showHero = location.pathname === "/"
  return (
    <>
      <nav className="min-h-80px w-full border-b-2 border-black p-6 bg-gray-100 shadow-[0px_6px_0px_rgba(0,0,255,0.4)] flex items-center justify-between">

        <h1 className="text-2xl font-bold font-[cursive] rotate-2">
          HabitTracker ✏️
        </h1>


        <div className="flex gap-10 text-lg font-semibold font-[cursive]">




          <Link to="/home" className="relative pb-1 border-b-2 border-dotted border-black transition-all duration-200 hover:rotate-[-3deg] hover:text-blue-600 hover:border-blue-600">   Home</Link>




          <Link
            to="/habits"
            className="relative pb-1 border-b-2 border-dotted border-black transition-all duration-200 hover:rotate-3 hover:text-blue-600 hover:border-blue-600"
          >
            Habits
          </Link>


          <Link
            to="/stats"
            className="relative pb-1 border-b-2 border-dotted border-black transition-all duration-200 hover:rotate-2 hover:text-blue-600 hover:border-blue-600"
          >
            Stats
          </Link>
        </div>
      </nav>

      <Outlet />

   {showHero &&   <Hero/>}
    </>
  );
}

export default Layout;
