import React from 'react'
import { Link } from 'react-router-dom'
import { TegakiRenderer } from 'tegaki';
import bundle from 'tegaki/fonts/caveat';
function Hero() {
    return (
        <div>

            <section className="flex flex-col items-center justify-center text-center px-6 py-28">
               
                     <TegakiRenderer
      font={bundle}
      time={{ mode: 'uncontrolled', speed: 4, loop: true }}
      style={{ fontSize: 48 }}
    >
        Build your habits 
        like a sketch
     
    </TegakiRenderer>
                    
                
                <p className="mt-6 max-w-xl opacity-80">
                    A simple and fun habit tracker with a hand-drawn feel. No complexity,
                    just progress.
                </p>

                <Link to="/home" className="mt-10 px-8 py-3.5 bg-gradient-to-br from-black to-black text-white rounded shadow-[8px_8px_0px_#5568d3] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#5568d3] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all">
                    Get Started </Link>
            </section>


            <section className="flex flex-col md:flex-row gap-6 justify-center px-10 pb-20">

                <div className="p-6 border-2 border-dashed border-black shadow-[4px_4px_0px_black] rotate-[-1deg] bg-white">
                    Simple UI
                </div>

                <div className="p-6 border-2 border-dashed border-black shadow-[4px_4px_0px_black] rotate-[1deg] bg-white">
                    Fast Tracking
                </div>

                <div className="p-6 border-2 border-dashed border-black shadow-[4px_4px_0px_black] rotate-[-2deg] bg-white">
                    Sketch Style
                </div>
            </section>

        </div>
    )
}

export default Hero