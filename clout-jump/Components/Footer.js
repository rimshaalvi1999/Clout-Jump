import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Footer() {
  function handleclick(){
    alert("subscribed successfully");
  }
  return (
    // 
    <footer className={` ${styles.footer}  md:w-fill sm:w-fill lg:w-fill body-font bg-black text-white`}>
      <div className="container  px-5  py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-30 px-20 mx-auto text-center md:text-left">
          <Image width={150} height={30} src={'/footer-logo.png'}></Image>
        </div>
        <div className="flex-grow flex flex-wrap  -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-24">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Features</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white ">Pricing</a>
              </li>
              <li>
                <a className="text-white ">Testimonials</a>
              </li>
              <li>
                <a className="text-white ">Special Requests</a>
              </li>
              <li>
                <a className="text-white">FAQS</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-20">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Legal</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white">Terms</a>
              </li>
              <li>
                <a className="text-white">Privacy</a>
              </li>
              <li>
                <a className="text-white ">Refunds</a>
              </li>
              <li>
                <a className="text-white">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-2">
            <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">Subscribe To Our Newsletter</h2>
            <p  className='mt-2'>
            The latest news, articles, and resources, sent</p>
            <p className='mt-2'> to your inbox weekly. 
            </p>
            <input type="text" placeholder='Enter Your Email' className='w-72 h-8 mt-2' />
            <button onClick={handleclick} className='w-72 h-8 mt-2 rounded-xl text-center bg-gradient-to-r from-pink-600 via-purple-700 to-yellow-500 text-white' >Subscribe</button>
        </div>
          </div>
      </div>
      <div className=" bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Clout Jump. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <p className="text-gray-500"> London • New York</p>
          </span>
        </div>
      </div>
    </footer>
  )

}
