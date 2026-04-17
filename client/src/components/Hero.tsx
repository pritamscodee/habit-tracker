import React from "react";
import { Link } from "react-router-dom";
import { TegakiRenderer } from "tegaki";
import bundle from "tegaki/fonts/caveat";

function Hero() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-center p-6">
      <section className="w-full max-w-3xl bg-yellow-300 border-4 border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform duration-200">
        <div className="text-center">
          <TegakiRenderer
            font={bundle}
            time={{ mode: "uncontrolled", speed: 4, loop: true }}
            style={{ fontSize: 56, fontWeight: "bold", color: "black" }}
          >
            Build your habits like a sketch
          </TegakiRenderer>

          <p className="mt-6 text-xl font-mono font-bold text-black/80 max-w-xl mx-auto">
            A simple and fun habit tracker with a hand‑drawn feel.
            <br />
            No complexity, just progress.
          </p>

          <Link
            to="/home"
            className="inline-block mt-10 px-10 py-4 bg-lime-400 border-4 border-black font-black uppercase text-lg tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            Get Started →
          </Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 justify-center mt-16 px-4 w-full max-w-4xl">
        <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
          <h3 className="text-2xl font-black uppercase">🧱 Simple UI</h3>
          <p className="mt-2 font-mono text-sm">
            No distractions. Just your habits.
          </p>
        </div>

        <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
          <h3 className="text-2xl font-black uppercase">⚡ Fast Tracking</h3>
          <p className="mt-2 font-mono text-sm">
            Log habits instantly. No loading.
          </p>
        </div>

        <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
          <h3 className="text-2xl font-black uppercase">✍️ Sketch Style</h3>
          <p className="mt-2 font-mono text-sm">
            Hand‑drawn aesthetic, digital ease.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
