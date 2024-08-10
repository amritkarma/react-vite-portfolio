import React from 'react'
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'

function Footer() {
    return (
        <footer className="w-full px-4 lg:px-0">
            <div className="max-w-6xl mx-auto border-t border-gray-600">
                <div className="py-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <p className="text-sm ">&copy; 2023 Meshle. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://facebook.com/" className="" target='_blank' rel="noreferrer"><RiFacebookBoxFill className="w-5 h-5 hover:text-gray-400 transition-all duration-200" /></a>
                        <a href="https://instagram.com/" className="" target='_blank' rel="noreferrer"><RiInstagramFill className="w-5 h-5 hover:text-gray-400 transition-all duration-200" /></a>
                        <a href="https://x.com/" className="" target='_blank' rel="noreferrer"><RiTwitterXFill className="w-5 h-5 hover:text-gray-400 transition-all duration-200" /></a>
                        <a href="https://linkedin.com/" className="" target='_blank' rel="noreferrer"><RiLinkedinBoxFill className="w-5 h-5 hover:text-gray-400 transition-all duration-200" /></a>
                        <a href="https://github.com/" className="" target='_blank' rel="noreferrer"><RiGithubFill className="w-5 h-5 hover:text-gray-400 transition-all duration-200" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer