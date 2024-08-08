import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import SearchableDropdown from './components/SearchableDropdown';

import img8 from './assets/images/img8.jpg';
import img4 from './assets/images/img4.png';
import img6 from './assets/images/img6.png';
import img7 from './assets/images/img7.png';
import img11 from './assets/images/img11.webp';
import CurrencyConverter from './components/CurrencyConverter';




function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      
    <nav className="max-container mx-auto p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
          <div className="flex items-center font-semibold text-2xl">
            
            <a href="#" className=''><FontAwesomeIcon icon={faExchangeAlt} className="mr-2 " />Simple Convert</a>
          </div>


        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="px-4 py-2 rounded hover:bg-black hover:text-white hover:shadow-xl">Home</a>
          <a href="#" className=" px-5 py-2 rounded hover:bg-black hover:text-white hover:shadow-xl">Conversion</a>
          <a href="#" className=" px-5 py-2 rounded hover:bg-black hover:text-white hover:shadow-xl">Result</a>
          <a href="#" className=" px-5 py-2 rounded hover:bg-black hover:text-white hover:shadow-xl">Settings</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className=" focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden space-y-2 mt-4">
          <a href="#" className="block text-gray-300 hover:text-white">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white">Conversion</a>
          <a href="#" className="block text-gray-300 hover:text-white">Result</a>
          <a href="#" className="block text-gray-300 hover:text-white">Settings</a>
        </div>
      )}
    </nav>

      <div className='max-container mx-auto p-6 md:mt-20 mt-10'>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-between'>

          {/* Left Section: Text and Button */}
          <div className='md:w-1/2'>
            <h3 className='text-sm font-medium tracking-tight text-gray-800'>Welcome to</h3>
            <h1 className='text-4xl font-bold tracking-tight text-slate-900 mt-2'>The Best <span className='gradient-text'>Currency Converter</span></h1>
            <p className='mt-4 text-lg text-slate-600'>
              Convert currencies quickly and easily with our accurate and reliable currency converter. Get the latest rates for all major currencies worldwide.
            </p>
            <button className='mt-6 bg-black text-white px-6 py-3 text-lg font-medium rounded-md'>
              Start Converting
            </button>
          </div>

          {/* Right Section: Currency Converter */}
          <div className='w-full md:w-96 mt-8 md:mt-0 '>
            <div className='rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 w-full'>
              
                <CurrencyConverter />
              
            </div>
          </div>

        </div>
      </div>

      <section className=' pb-10'>
      <div className="w-full max-w-screen-xl mx-auto p-6 mt-10 ">
          <h2 className="text-3xl font-bold text-center text-slate-900 my-8">Send Money to Your <span className='gradient-text font-montserrat font-bold '>Loved Ones! </span><br/> Via our Trusted Partners</h2>

        <div className="flex flex-wrap w-full justify-center items-center gap-20">
          {/* Partner Logos */}
          
            <a href='https://www.revolut.com/en-US/money-transfer/' target='blank'><img src={img4} alt="Partner 2" className="h-16 md:h-20" /></a>
            <a href='https://www.bankofamerica.com/' target='blank'><img src={img8} alt="Partner 5" className="h-16 md:h-20" /></a>
            <a href='https://www.sparkasse.de/' target='blank'><img src={img6} alt="Partner 3" className="h-16 md:h-20 rounded-full" /></a>
            <a href='https://wise.com/us/' target='blank'><img src={img7} alt="Partner 4" className="h-16 md:h-20" /></a>
            <a href='https://www.paypal.com/us/digital-wallet/send-receive-money/send-money' target='blank'> <img src={img11} alt="Partner 4" className="h-16 md:h-20" /></a>



          {/* Add more logos as needed */}
        </div>

     
      </div>

      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-container  mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center font-semibold text-xl mb-3">

              <a href="#" className=''><FontAwesomeIcon icon={faExchangeAlt} className="mr-2 " />Simple Convert</a>
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Building modern, responsive web applications to power your digital presence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0 flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm">Home</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">About</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Services</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white">
              {/* Replace with actual icons */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4M2 20h4v4M12 8v12M16 12v8M8 16v4" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4M2 20h4v4M12 8v12M16 12v8M8 16v4" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4M2 20h4v4M12 8v12M16 12v8M8 16v4" />
              </svg>
            </a>
          </div>

        </div>
      </footer>


    </>
      
      
    
  );
}

export default App;
