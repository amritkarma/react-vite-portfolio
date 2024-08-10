import React from 'react'

function Services() {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id='Services'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">Front-End</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Frontend Solutions</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
                As a frontend developer, I craft engaging user interfaces using HTML, CSS, and JavaScript. I specialize in creating responsive designs that seamlessly adapt to various devices. My goal is to enhance user experiences by ensuring smooth interactions and visually appealing layouts.
              </p>
            </div>
          </div>
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">Back-End</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Robust Backend Systems</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
                Behind every successful web application lies a powerful backend. I build robust server-side solutions using technologies like Node.js, Python. From handling data storage to implementing APIs, I ensure seamless communication between the frontend and the server.
              </p>
            </div>
          </div>
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">UI/UX</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">User-Centric Design</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
                Crafting delightful user experiences is my passion. I create intuitive interfaces that prioritize usability and aesthetics. Through wireframing, prototyping, and user testing, I transform ideas into visually appealing designs that resonate with users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}

export default Services