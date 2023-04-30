
import React from "react"
import Image from "next/image";
export default function Home() {
  function handleclick(){
    alert("contact us button working");
  }
  return (
    <>
      <div className='flex flex-col w-full h-3/4 justify-centre items-center  mt-10 mb-2 '>
        <div className='font-bold text-2xl w-96 h-10 text-center'>
          <span>SPECIAL</span>
          <span className='mx-1 text-transparent  bg-clip-text bg-gradient-to-r from-pink-600 via-purple-900 to-yellow-500'> REQUEST.</span>
        </div>
        <div className='max-w-lg h-10 text-center mt-2' ><p>Our team is dedicated to providing the highest customer service and support. If you have any special requests, we're here to listen and do everything we can to help you succeed on Instagram.</p></div>
        <div className='mt-16 w-96 h-2/4 border-2 border-transparent relative'>
          <input type="text" placeholder='Email' className='w-96 h-10 rounded-md pl-3' />
          <input type="text" placeholder='Phone no' className='w-96 h-10 mt-4 rounded-md pl-3' />
          <textarea name="" id="" cols="44" rows="10" placeholder='message' className='w-96 h-28 mt-4 pl-3'></textarea>
          <button onClick={handleclick} className=' ml-24 mt-4 mx-5 border-2 w-48 h-10 rounded-xl text-center bg-gradient-to-r from-pink-600 via-purple-700 to-yellow-500 text-white'>Contact Us</button>
        </div>
      </div>
         <div className="flex flex-row justify-between"> 
        <Image className="ml-10  -z-10 mt-2" width={150} height={20} src={'/vector-1.png'} alt="pic"></Image>
        <Image width={52} height={58} className=" w-14 h-16 -ml-20 -mt-48  rotate-9" alt="picc" src={'/rocket-left.png'}></Image>
        <Image width={52} height={58} className=" w-14 h-16 ml-96 -mt-20 -mr-90 -rotate-45" alt="piccc"  src={'/rocket-ryt.png'}></Image>
        <Image className=" -z-10 -mr-0 mb-20 -mt-8 rotate-180" width={150} height={20} alt="picccc" src={'/vector-2.png'}></Image>
         </div>
    </>
  )
}

