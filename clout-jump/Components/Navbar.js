import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Navbar() {
    function handleclick(){
        alert("working");
    }
  return (
    <div className='flex flex-col justify-between items-center md:flex-row mt-1 mb-2'>
      <div className=' md:ml-60'> <Link href={'/'}>
        <Image width={100} height={40} src={'/logo.png'} alt='logoimage'></Image></Link>
      </div>
      <div className='md:mr-96 md:pr-12  md:pt-0 md:pb-0'>
        <ul className='flex space-x-6 font-normal mt-4'>
          <Link href={'/Pricing'}><li>Pricing</li> </Link>
          <Link href={'/Testimonials'}><li>Testimonials</li></Link>
          <Link href={'/SpecialRequest'}><li>Special Requests</li></Link>
          <Link href={'/Faqs'}><li>Faqs</li></Link>
        </ul>
      </div>
      <div className='absolute right-0 mx-5 top-5 font-semibold md:mr-60  border-2  w-32 h-10 rounded-xl pt-1 text-center'>
        <button className={styles.btn} onClick={handleclick}>Sign Up</button>
      </div>
    </div>
  )
}
