import React from 'react';
import energy from './ProjectAssets/energy.png'
import ttt from './ProjectAssets/ttt.png'
import calc from './ProjectAssets/cla.png'
import todo from './ProjectAssets/todo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  return (
    <div className='bg-white py-[5rem] w-full overflow-x-hidden text-center'>
      <h1 className='text-[2.5rem] md:text-[3rem] font-bold'>Projects</h1>
      <p className='bg-yellow-400 py-1 w-[4rem] mx-auto rounded-[10px] mt-2'></p>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={energy} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='text-center md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Energy Tracker</h1>
          <p className='md:text-[20px] mb-9'>
            Energy Tracker is a web app that estimates household electricity usage based on user input and suggests tips if consumption exceeds expected levels. It helps promote smarter, energy-efficient habits.
          </p>
          <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>
            Live App
          </button>
          <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
        </div>
      </div>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={ttt} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Tic Tac Toe</h1>
          <p className='text-[20px] mb-9'>
            Energy Tracker is a web app that estimates household electricity usage based on user input and suggests tips if consumption exceeds expected levels. It helps promote smarter, energy-efficient habits.
          </p>
          <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>
            Play
          </button>
          <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
        </div>
      </div>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={calc} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Calculator</h1>
          <p className='text-[20px] mb-9'>
            Energy Tracker is a web app that estimates household electricity usage based on user input and suggests tips if consumption exceeds expected levels. It helps promote smarter, energy-efficient habits.
          </p>
          <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>
            Claculate
          </button>
          <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
        </div>
      </div>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={todo} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Todo List</h1>
          <p className='text-[20px] mb-9'>
            Energy Tracker is a web app that estimates household electricity usage based on user input and suggests tips if consumption exceeds expected levels. It helps promote smarter, energy-efficient habits.
          </p>
          <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>
            Track
          </button>
          <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
        </div>
      </div>
      
    </div>
  );
}

export default Project;
