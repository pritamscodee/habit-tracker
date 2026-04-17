import  { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const emojis = ["😎", "🤪", "👾", "🚀", "💥", "😈", "🌀", "🎯"];
  const [emoji, setEmoji] = useState("😎");

  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  const changeEmoji = () => {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(random);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-black border-t-4 border-black mt-10 w-5/6 mx-auto
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="bg-yellow-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full">
        <div className="px-6 sm:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-7xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">
                ✏️ HabitTracker
              </h3>
              <p className="font-mono text-xs mt-1 text-black/70">
                brutalist habits, real results
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold uppercase text-xs sm:text-sm">
              <Link to="/home" className="hover:underline underline-offset-4">
                Home
              </Link>
              <Link to="/habits" className="hover:underline underline-offset-4">
                Habits
              </Link>
              <Link to="/privacy" className="hover:underline underline-offset-4">
                Privacy
              </Link>
              <a href="#" className="hover:underline underline-offset-4">
                Terms
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="https://github.com/pritamscodee/habit-tracker"
                className="w-9 h-9 flex items-center justify-center border-2 border-black rounded-full hover:bg-black hover:text-white transition"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://x.com/pritam1010110"
                className="w-9 h-9 flex items-center justify-center border-2 border-black rounded-full text-xs font-bold hover:bg-black hover:text-white transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

              <button
                onClick={changeEmoji}
                className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full
                                text-lg transition duration-200
                                hover:scale-125 hover:-translate-y-1 hover:bg-black hover:text-white active:scale-90"
              >
                {emoji}
              </button>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t-2 border-black/30 text-center font-mono text-[10px] sm:text-xs">
            © 2025 HabitTracker — no smooth corners, no regrets.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
