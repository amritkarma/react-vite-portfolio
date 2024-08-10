import React from 'react'

function Projects() {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id='Projects'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="" className="hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-900 rounded-lg transition-all duration-200">
            <div className="rounded-lg">
              <img src="./pexels-tranmautritam.jpg" alt="" className="w-full h-52 object-cover rounded-lg" />
              <div className="px-4 py-2.5">
                <h2 className="text-lg font-semibold">Ecommerce website in Nextjs</h2>
                <p className="text-base text-gray-900 dark:text-gray-400 font-medium">Responsive Ecommerce website Nextjs and Tailwind CSS.</p>
              </div>
            </div>
          </a>
          <a href="" className="hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-900 rounded-lg transition-all duration-200">
            <div className="rounded-lg">
              <img src="./appuuxidesign.gif" alt="" className="w-full h-52 object-cover rounded-lg" />
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">App UI/UX Design</h2>
                <p className="text-base text-gray-900 dark:text-gray-400 font-medium">App UI/UX Design with Figma and Andriod studio kotlin jetpack compose.</p>
              </div>
            </div>
          </a>
          <a href="" className="hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-900 rounded-lg transition-all duration-200">
            <div className="rounded-lg">
              <img src="./dashboarduiux.jpg" alt="" className="w-full h-52 object-cover rounded-lg" />
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Dashboard Nextjs Django</h2>
                <p className="text-base text-gray-900 dark:text-gray-400 font-medium">Dashboard Nextjs Django Full stack web dev.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}

export default Projects