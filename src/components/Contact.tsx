"use client";

import { MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="w-full flex flex-col md:flex-row justify-center items-center min-h-[70vh] bg-slate-900/80 my-8 md:my-16 px-4 md:px-8 py-4 gap-4 md:gap-8">
      {/* Left: Contact Info */}
      <div className="bg-[#18181b] text-white rounded-2xl p-4 md:p-8 md:w-1/3 w-full mb-4 md:mb-0 md:mr-8 shadow-lg flex flex-col gap-8">
        <div> 
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <div className="flex items-start gap-4 mb-6">
            <span className="bg-[#232329] p-3 rounded-lg"><MdPhone size={24} /></span>
            <div>
              <div className="text-xs text-gray-400">CONTACT</div>
              <div className="text-sm">+261 34 05 633 35</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-[#232329] p-3 rounded-lg"><MdLocationOn size={24} /></span>
            <div>
              <div className="text-xs text-gray-400">LOCATION</div>
              <div className="text-sm">Ambodifasina Ivato</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">SOCIAL INFO</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-[#232329] p-3 rounded-full hover:bg-[#31313a] transition"><FaFacebook size={20} /></a>
            <a href="#" className="bg-[#232329] p-3 rounded-full hover:bg-[#31313a] transition"><FaLinkedin size={20} /></a>
            <a href="#" className="bg-[#232329] p-3 rounded-full hover:bg-[#31313a] transition"><FaGithub size={20} /></a>
          </div>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="bg-[#18181b] rounded-2xl p-4 md:p-8 md:w-2/3 w-full shadow-lg flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Let&apos;s work <span className="text-blue-500">together.</span></h2>
        <form className="space-y-6">
          <input type="text" placeholder="Name *" className="w-full bg-[#232329] text-white border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400" />
          <input type="email" placeholder="Email *" className="w-full bg-[#232329] text-white border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400" />
          <input type="text" placeholder="Your Subject *" className="w-full bg-[#232329] text-white border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400" />
          <textarea placeholder="Your Message *" className="w-full bg-[#232329] text-white border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400" rows={4}></textarea>
          <button type="submit" className="w-full bg-[#31313a] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-all duration-200">Send Message</button>
        </form>
      </div>
    </section>
  );
} 