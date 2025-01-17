import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PhoneCall } from 'lucide-react';


function Contact() {
  return (
    <div className='flex font-beb flex-col justify-center items-center pt-[10vh] bg-gray-100'>
      <div className="text-7xl">CONTACT <span className='text-red-600'>US</span></div>
      <div className="h-[50vh] w-[90vw] py-5">
        <iframe
          className="h-full w-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.4253922299!2d75.81081395000001!3d11.255834749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1737069733962!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className='text-4xl py-5'>SEND US A QUERY</p>

      <div className="flex flex-col 2xl:flex-row w-full max-w-4xl gap-8">
        <div className="flex-1">
          <form className="space-y-4 bg-white p-6 rblackg">
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-2xl font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-black  shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-2xl font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-black  shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-2xl font-medium ">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-4 py-2 border border-black  shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-2xl font-medium ">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                className="mt-1 block w-full px-4 py-2 h-32 border border-black  shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl"
                placeholder="Enter the subject"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white   hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1  p-6 rblackg text-2xl">
          <p>Connect with us through</p>
            <div className="border border  border-black p-2 my-4">
              <a href=""className='flex'><FaWhatsapp className='mr-3'/>              Contact us via whatsapp</a>
            </div>
            <div className="border border border-black p-2 my-4">
              <a href=""className='flex'><CiMail className='mr-3'/>              Contact us via Mail</a>
            </div>
            <div className="border border border-black p-2">
              <a href=""className='flex'><PhoneCall className='mr-3'/>              Ring us</a>
            </div>
            <p className='py-10 text-gray-500'>At FleetFix, we’re dedicated to keeping your fleet running smoothly, ensuring your business stays on track with reliable maintenance and repair services.



</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
