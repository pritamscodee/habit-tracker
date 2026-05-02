import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const showHero = location.pathname === "/";

  // 🔐 Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  // 🎭 Emoji
  const emojis = ["😎", "🤪", "👾", "🚀", "💥", "😈", "🌀", "🎯", "🔥", "🐸", "🍕", "⚡"];
  const [emoji, setEmoji] = useState("😎");

  const changeEmoji = () => {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(random);
  };

  // 🌙 Dark mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
   if(darkMode){
    document.documentElement.classList.add("dark");
   }else
   {
    document.documentElement.classList.remove("dark");
   }
  },[darkMode]);

  // 📍 Active link
  const isActive = (path: string) =>
    location.pathname === path ? "underline" : "";

  // 📉 Footer show on scroll
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowFooter(scrollY + windowHeight >= fullHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔝 NAVBAR */}
      <nav
        className={`w-full border-b-4 border-black shadow-[0px_8px_0px_rgba(0,0,0,1)]
        ${darkMode ? "bg-black text-white" : "bg-cyan-400 text-black"}`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 max-w-7xl mx-auto">

          {/* Logo */}
          <h1 className="text-3xl font-black uppercase tracking-tighter rotate-2 hover:rotate-0 transition">
            <Link to="/">✏️ HabitTracker</Link>
          </h1>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-bold uppercase">

            <Link to="/home" className={isActive("/home")}>
              Home
            </Link>

            <Link to="/habits" className={isActive("/habits")}>
              Habits
            </Link>

            {/* Emoji Button */}
            <button
              onClick={changeEmoji}
              className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full
              hover:scale-125 active:scale-90"
            >
              {emoji}
            </button>

            {/* 🔐 Auth Buttons */}
            <div className="flex gap-3 items-center">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <button className="px-4 py-2 bg-black text-white rounded hover:opacity-80">
                      Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button className="px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white">
                      Register
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:opacity-80"
                >
                  Logout
                </button>
              )}
            </div>

            {/* 🌙 Dark Mode Toggle */}
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center cursor-pointer select-none"
            >
              <span className="mr-2 text-sm font-black">
                {darkMode ? "DARK" : "LIGHT"}
              </span>

              <div
                className={`w-[60px] h-[28px] border-2 border-black shadow-[3px_3px_0px_black] relative
                ${darkMode ? "bg-green-400" : "bg-red-400"}`}
              >
                <div
                  className={`w-[24px] h-[24px] bg-white border-2 border-black absolute top-0 transition-all duration-150
                  ${darkMode ? "left-[32px]" : "left-0"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 📄 PAGE CONTENT */}
      <div
        className="min-h-screen bg-background text-foreground"
      >
        <Outlet />
        {showHero && <Hero />}
      </div>

      {/* 📉 FOOTER */}
      <div
        className={`transition-all duration-500 transform
        ${showFooter ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
      >
        <Footer />
      </div>
    </>
  );
}

export default Layout;