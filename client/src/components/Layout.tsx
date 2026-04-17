import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  const showHero = location.pathname === "/";

  const emojis = ["😎", "🤪", "👾", "🚀", "💥", "😈", "🌀", "🎯", "🔥", "🐸", "🍕", "⚡"];

  const [emoji, setEmoji] = useState("😎");
  const [showFooter, setShowFooter] = useState(false);

  const changeEmoji = () => {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(random);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= fullHeight - 80) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="w-full bg-cyan-400 border-b-4 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 max-w-7xl mx-auto">
          <h1 className="text-3xl font-black uppercase tracking-tighter rotate-[-2deg] hover:rotate-0 transition-transform duration-200">
            ✏️ HabitTracker
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-lg font-bold uppercase">
            <Link to="/home">Home</Link>
            <Link to="/habits">Habits</Link>
            <Link to="/planner">Ai+Planner</Link>

            <button
              onClick={changeEmoji}
              className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full
              hover:scale-125 active:scale-90"
            >
              {emoji}
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
      {showHero && <Hero />}


      <div
        className={`transition-all duration-500 ease-in-out transform
        ${showFooter ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
      >
        <Footer />
      </div>
    </>
  );
}

export default Layout;