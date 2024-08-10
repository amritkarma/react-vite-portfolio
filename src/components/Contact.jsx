import React, { useState } from 'react'
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2'



function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [message, setMessage] = useState({ message: '', status: '' })
  const [loading, setLoading] = useState(false)

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handelsubmit = (e) => {
    e.preventDefault()
    // use your server url for email client
    const url = "http://localhost:8000"
    setLoading(true)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formData),
    }

    fetch(url, options)
      .then(res => {
        if (res.ok || res.status === 201) {
          setMessage({ message: 'Form submitted successfully', status: 'success' })
          setTimeout(() => {
            setMessage({ message: '', status: '' })
          }, 5000)
          setLoading(false)
        }
        if (res.status === 404) {
          setMessage({ message: 'Form Not submitted 404 not found Error!', status: 'error' })
          setTimeout(() => {
            setMessage({ message: '', status: '' })
          }, 5000)
          setLoading(false)
        }
        if (res.status === 500) {
          setMessage({ message: 'Form Not submitted 500 server Error!', status: 'error' })
          setTimeout(() => {
            setMessage({ message: '', status: '' })
          }, 5000)
          setLoading(false)
        }
        return res.json()
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        setMessage({ message: 'Form Not submitted Error!', status: 'error' })
        setTimeout(() => {
          setMessage({ message: '', status: '' })
        }, 5000)
        setLoading(false)
        console.log(error)
      })
      .finally(
      // setLoading(false)
    )
  }
  return (
    <section className="w-full px-4 lg:px-0 py-24" id='Contact'>
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Contact</h2>
        <div className="w-full tracking-wide space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:Meshle@gmail.com" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2"><HiEnvelope className='w-6 h-6' /><span className="">Meshle@gmail.com</span></a>
            <a href="tel:+919876543210" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2"><HiPhone className='w-6 h-6' /><span className="">+919876543210</span></a>
            <a href="" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2"><HiMapPin className='w-6 h-6' /><span className="">Earth</span></a>
          </div>
          <form action="" method='post' onSubmit={handelsubmit} className="max-w-md mx-auto space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input type="text" name='name' id='name' value={formData.name} onChange={handlechange} className="px-2 py-2 w-full bg-white dark:bg-zinc-900 border border-zinc-700 rounded-md" placeholder='Meshle' required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input type="email" name='email' id='email' value={formData.email} onChange={handlechange} className="px-2 py-2 w-full bg-white dark:bg-zinc-900 border border-zinc-700 rounded-md" placeholder='Meshle@gmail.com' required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handlechange} cols="30" rows="10" className="px-2 py-2 w-full h-40 bg-white dark:bg-zinc-900 border border-zinc-700 rounded-md" placeholder='Your message' required></textarea>
            </div>
            <button type="submit" className="w-full py-1.5 text-white font-medium dark:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-700 flex flex-row items-center justify-center rounded-md group">{!loading ? <span>Submit</span> : <div className="w-6 h-6 border border-t-2 border-t-white dark:border-t-gray-700 border-transparent group-hover:border-t-white rounded-full animate-spin duration-200"></div>}</button>
            <div className={`${!message ? 'hidden' : 'text-center'} ${message.status === 'success' ? 'text-green-500' : 'text-red-500'} `}>{message.message}</div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact