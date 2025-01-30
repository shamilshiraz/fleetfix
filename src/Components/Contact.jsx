import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PhoneCall } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_yd15wqq', 'template_yqd51cl', e.target, '_pMg6qJhzGNNq3nNT')
      .then((result) => {
        toast.success('Message sent successfully!'); // Success toast
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send the message, please try again.'); // Error toast
      });
  
    e.target.reset();
  };
  

  return (
    <div id='contact' className='flex  flex-col justify-center items-center pt-[vh]'>
      <div className="text-7xl" >
        {t('contact.h1')} <span className='text-red-600'> {t('contact.h2')}</span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1600" className="h-[50vh] w-[90vw] py-5">
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.4717902589814!2d46.7416839753639!3d24.64188387807263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM4JzMwLjgiTiA0NsKwNDQnMzkuMyJF!5e0!3m2!1sen!2sin!4v1737973798534!5m2!1sen!2sin"
  className='w-full h-full'
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
      </div>
      <p className='text-4xl py-5' data-aos="fade-up" data-aos-duration="1600"> {t('contact.query')}</p>

      <div className="flex flex-col 2xl:flex-row w-full max-w-4xl gap-8">
        <div className="flex-1">
          <form onSubmit={sendEmail} className="space-y-4 bg-white p-6 rblackg">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-2xl font-medium"> {t('contact.name')}</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-black shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl" placeholder= {t('contact.en')} />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-2xl font-medium"> {t('contact.email')}</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-black shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl" placeholder={t('contact.em')} />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-2xl font-medium">{t('contact.phone')}</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-4 py-2 border border-black shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl" placeholder={t('contact.ep')} />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-2xl font-medium">{t('contact.subject')}</label>
              <textarea id="subject" name="subject" className="mt-1 block w-full px-4 py-2 h-32 border border-black shadow-2xl focus:ring-indigo-500 focus:border-indigo-500 2xl:text-2xl" placeholder={t('contact.es')}></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="w-full px-4 py-2 bg-black text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {t('contact.submit')}
              </button>
            </div>
          </form>
        </div>
        <div  className="flex-1 p-6 rblackg text-2xl">
          <p>{t('contact.connect')}</p>
          <div className="border border-black p-2 my-4">
            <a href="https://wa.me/966571348034?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20spare%20parts" className='flex'><FaWhatsapp className='mr-3' />{t('contact.wa')}</a>
          </div>
          <div className="border border-black p-2 my-4">
            <a href="mailto:sales@fleetsfix.com?subject=I%20would%20like%20to%20enquire%20about%20spare%20parts&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20spare%20parts." className='flex'><CiMail className='mr-3' />{t('contact.ma')}</a>
          </div>
          <div className="border border-black p-2">
            <a href="tel:+966571348034" className='flex'><PhoneCall className='mr-3' />{t('contact.ph')}</a>
          </div>
          <p className='py-10 text-gray-500'>{t('contact.ct')}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
