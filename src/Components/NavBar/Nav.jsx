import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import yash from './New folder/yash2.png'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Nav() {
  const [open, setOpen] = useState(false)

  const NavLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <div className='w-full mt-0 text-[#393E46] py-4 px-7 rounded-[15px] bg-white fixed left-0 top-0 z-50 shadow-md'>
      <div className='md:flex justify-between items-center'>
        {/* Logo */}
        <div className='flex gap-2 items-center ps-5'>
          <img src={yash} alt="" className='cursor-pointer w-[55px] h-[50px] rounded-full border border-yellow-500' />
          <h1 className='text-[1.8rem] font-bold py-2 ps-2 cursor-pointer'>YS</h1>
        </div>

        {/* Hamburger */}
        <div className='absolute right-[20px] top-[35px] md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>

        {/* Nav Links */}
        <ul className={`md:flex gap-[4rem] duration-300 md:static absolute bg-white md:w-auto w-full md:pr-[100px] px-6 left-0 text-end md:py-0 py-2 z-40 ${open ? 'top-[95px] opacity-100' : 'hidden'} md:opacity-100 md:top-0`}>
          {NavLinks.map((v, i) => (
            <li key={i} className='my-3 md:py-0 py-3 md:px-0 px-3 text-[1.2rem]'>
              <Link
                to={v.to}
                smooth={true}
                duration={500}
                offset={-120}
                spy={true}
                onClick={() => setOpen(false)}
                activeClass="border-b-[3px] border-yellow-400 text-yellow-400"
                className="cursor-pointer pb-1 hover:text-yellow-400 duration-200"
              >
                {v.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav
