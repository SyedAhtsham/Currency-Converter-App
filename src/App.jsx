import React from 'react';

import img8 from './assets/images/img8.jpg';
import img4 from './assets/images/img4.png';
import img6 from './assets/images/img6.png';
import img7 from './assets/images/img7.png';
import img11 from './assets/images/img11.webp';
import CurrencyConverter from './components/CurrencyConverter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <div className="max-container mx-auto p-6 md:mt-20 mt-5 bg-white text-gray-900">
        <div className='flex flex-col md:flex-row gap-5 items-center justify-between'>
          {/* Left Section: Text and Button */}
          <div className='md:w-1/2'>
            <h3 className='text-sm font-medium tracking-tight'>Welcome to</h3>
            <h1 className='text-4xl font-bold tracking-tight mt-2'>
              One of the Best <span className='gradient-text'>Currency Converter</span>
            </h1>
            <p className='mt-4 text-lg'>
              Convert currencies quickly and easily with our accurate and reliable currency converter. Get the latest rates for all major currencies worldwide.
            </p>
            <button className='mt-6 bg-black text-white px-6 py-3 text-lg font-medium rounded-md' >
              Start Converting
            </button>
          </div>

          {/* Right Section: Currency Converter */}
          <div className='w-full md:w-96 mt-8 md:mt-0'>
            <div className='rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 w-full'>
              <CurrencyConverter />
            </div>
          </div>
        </div>
      </div>

      <section className='pb-10'>
        <div className="w-full max-w-screen-xl mx-auto p-6 mt-10">

            <h2 className="text-3xl font-bold text-center my-8 max-w-[30ch] mx-auto">
              Send Money to Your Loved Ones! Via our Trusted Partners
            </h2>

          <div className="flex flex-wrap w-full justify-around items-center gap-20">
            {/* Partner Logos */}
            <a href='https://www.revolut.com/en-US/money-transfer/' target='blank'><img src={img4} alt="Partner 2" className="h-16 md:h-20" /></a>
            <a href='https://www.bankofamerica.com/' target='blank'><img src={img8} alt="Partner 5" className="h-16 md:h-20" /></a>
            <a href='https://www.sparkasse.de/' target='blank'><img src={img6} alt="Partner 3" className="h-16 md:h-20 rounded-full" /></a>
            <a href='https://wise.com/us/' target='blank'><img src={img7} alt="Partner 4" className="h-16 md:h-20" /></a>
            <a href='https://www.paypal.com/us/digital-wallet/send-receive-money/send-money' target='blank'><img src={img11} alt="Partner 4" className="h-16 md:h-20" /></a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
