import React from 'react'

function About() {
  return (
    <section className="w-full px-4 lg:px-0 py-24" id='About'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">About</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 tracking-wide space-y-4 md:ml-20">
            <h3 className="text-center md:text-left text-xl font-bold"> Hello! I'm Meshle</h3>
            <p className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium">
              I specialize in both front-end and back-end development. With a strong background in HTML, CSS, JavaScript, and various frameworks, I've worked on a variety of projects. From e-commerce websites to weather apps, I love creating seamless user experiences.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="./pexels-david-garrison.jpg" alt="" className="w-72 h-72 object-cover rounded-2xl shadow-lg hover:shadow-xl hover:rotate-6 transition duration-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About