import { icon } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {

  return (
    <div className='bg-[#000000] text-[#FFFFFF] w-[100%] md:h-[49vh] h-auto overflow-y-hidden px-4'>
        <div className='max-w-[1200px] m-auto'>
            <div className='grid grid-rows-1 md:grid-cols-[70%_30%] py-5 pt-[5rem] gap:0 md:gap-[9rem] md:px-0 px-3'>
                <div>
                  <h1 className='text-[30px] font-bold'>Yash Sawant</h1>
                <p className='mt-4 md:pr-[15rem]'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className='mt-10'>
                  <h1 className='text-[30px] font-bold'>Social</h1>
                  <div className='flex gap-5 mt-4'>
                    
                      return(
                        <p className='text-[25px] hover:translate-y-[-0.5rem] duration-500 cursor-pointer'>
                          <a href="https://www.linkedin.com/in/YashSawant027/"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </p>
                        <p className='text-[25px] hover:translate-y-[-0.5rem] duration-500 cursor-pointer'>
                          <a href="https://github.com/YashSawant027"><FontAwesomeIcon icon={faGithub}/></a>
                        </p>
                      )
                    
                  </div>
                </div>
            </div>
            <div className='mt-[3rem] text-center'>
              <p className='p-5 border-t-[0.2px] border-gray-200 border-solid'>@Copyright. Made By <span className='underline cursor-pointer'>Yash Sawant</span></p>
            </div>
        </div>

    </div>
  )
}

export default Footer