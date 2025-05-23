import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [zoom,setZoom]=useState(false);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setZoom(true);
        },100);
        return () => clearTimeout(timer);
    },[]);
                            
  return(
    <div className='text-center py-10'>
      <div className='text-gray-400 font-semibold font-serif text-xs sm:text-sm'>Welcome , to Heer Education Hub</div>
        <div className={`transform transition-transform duration-1000 ease-in-out ${zoom ? 'scale-110 text-gray-400' : 'scale-10'}`}>
      <h1 className='text-4xl md:text-6xl font-bold uppercase  py-5'>Admin Table</h1>
      </div>

      <section className='flex items-center justify-center flex-col w-full'>
        <div className='text-gray-400 font-semibold font-serif text-xs sm:text-sm'>One Destination for complete Web Development</div>
        <nav className='bg-gray-100 w-full sm:max-w-full md:w-[80%] lg:w-[50%] my-5 p-4 mx-auto'>
          <ul className='flex items-center justify-center  gap-4 sm:gap-8 capitalize text-gray-600 font-medium text-xs sm:text-[15px]'>
            <li>
              <a href="#">Home</a>
           </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">Code</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Navbar
        