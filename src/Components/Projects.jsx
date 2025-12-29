import React from 'react'
import heroBg from './ProjectAssets/heroBg.jpg'
function Projects() {
  return (
    <div className='bg-[rgb(245_245_245)] py-[5rem] w-full overflow-x-hidden text-center h-auto'>
      <h1 className='text-[2.5rem] md:text-[3rem] font-bold'>Projects</h1>
      <p className='bg-yellow-400 py-1 w-[4rem] mx-auto rounded-[10px] mt-2'></p>

      {/* Energy Tracker */}
      <div className='max-w-[1170px] px-4 mx-auto'>
        <div
          className='w-full max-w-[950px] h-auto aspect-[950/650] bg-cover bg-no-repeat mx-auto mt-7 relative rounded-[10px]'
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <img
            src={EnergyTracker}
            alt=""
            className='w-[90%] max-w-[800px] h-auto translate-y-1/3 hover:scale-95 duration-500 rounded-[10px] mx-auto'
          />

          <div className='text-start absolute top-[20%] 
            right-[-37%] xl:right-[-30%] lg:right-[-20%] md:right-[-10%] sm:right-0 max-sm:relative max-sm:top-4 max-sm:right-0 px-6'>
            <h1 className='text-[1.75rem] md:text-[2rem] font-bold text-[#4B352A]'>Energy Tracker</h1>
            <h2 className='text-[1.75rem] md:text-[2rem] font-bold text-[#4B352A]'>Energy Tracking App</h2>
            <p className='text-[1.25rem] mt-4 text-[#000000] font-bold'>
              Instant Energy Consumption Tracking app built with <br />
              React, Python and MySQL.
            </p>
            <button className='uppercase text-[1rem] mt-10 font-bold bg-yellow-400 text-white py-2 px-4 rounded-[10px] hover:translate-y-[-0.5rem] duration-500'>
              Live App
            </button>
          </div>
        </div>
      </div>

      {/* Tic Tac Toe */}
      <div className='max-w-[1170px] mx-auto my-[10rem] flex justify-end px-4'>
        <div
          className='w-full max-w-[950px] h-auto aspect-[950/650] bg-cover bg-no-repeat rounded-[10px]'
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className='px-4 py-3 relative'>
            <img
              src={TTT}
              alt=""
              className='w-[90%] max-w-[800px] h-auto translate-y-[23%] ml-auto bg-cover bg-no-repeat rounded-[10px]'
            />
            <div className='text-start absolute top-[25%] 
              left-[-30%] xl:left-[-20%] lg:left-[-15%] md:left-[-8%] sm:left-0 max-sm:relative max-sm:top-4 max-sm:left-0'>
              <h1 className='text-[1.75rem] md:text-[2rem] font-bold text-[#4B352A]'>Tic Tac Toe</h1>
              <h2 className='text-[1.75rem] md:text-[2rem] font-bold text-[#4B352A]'>X - O App</h2>
              <p className='text-[1.25rem] mt-4 text-[#000000] font-bold'>
                This is a X - O game built with HTML, CSS <br />
                and JavaScript.
              </p>
              <button className='uppercase text-[1rem] mt-10 font-bold bg-yellow-400 text-white py-2 px-4 rounded-[10px] hover:translate-y-[-0.5rem] duration-500'>
                Live App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
