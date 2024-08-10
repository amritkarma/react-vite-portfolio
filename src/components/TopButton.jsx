import React, { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi2'

function TopButton() {
  const [topbutton, setTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setTopButton(true)
      } else {
        setTopButton(false)
      }
    })
  })
  return (
    <button type="button" onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }} className={`fixed bottom-12 right-6 px-2 py-2 bg-zinc-600/20 rounded-full ${!topbutton? 'hidden':''}`}><HiArrowUp className='w-6 h-6' strokeWidth={1} /></button>
  )
}

export default TopButton