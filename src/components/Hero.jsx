import React from 'react'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <section className="w-full px-4 lg:px-0 py-24" id='hero'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 md:gap-4 items-center justify-center">
        <div className="flex-1 tracking-wide space-y-4 md:ml-24">
          <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold">Hi, I am Meshle Full Stack Web Developer</h1>
          <p className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium">
            As a passionate web developer based in Earth, I thrive on turning ideas into functional and visually appealing websites. Whether it's crafting responsive designs or optimizing performance.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <Link to="Contact" className="px-10 py-2.5 mt-4 text-white dark:text-black dark:hover:text-white text-sm md:text-base font-medium bg-black hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-700 rounded-lg cursor-pointer" smooth={true} offset={0} duration={100}>Contact</Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="./pexels-david-garrison.jpg" alt="" className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero