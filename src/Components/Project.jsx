import React from 'react';
import energy from './ProjectAssets/EnergyTracker.png'
import ttt from './ProjectAssets/ttt.png'
import Queryla from './ProjectAssets/Queryla.png'
import medibot from './ProjectAssets/medibot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  return (
    <div className='bg-white py-[5rem] w-full overflow-x-hidden text-center'>
      <h1 className='text-[2.5rem] md:text-[3rem] font-bold'>Projects</h1>
      <p className='bg-yellow-400 py-1 w-[4rem] mx-auto rounded-[10px] mt-2'></p>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={Queryla} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Queryla</h1>
          <p className='text-[20px] mb-9'>
            Designed and developed a full-stack system that translates natural language questions into optimized SQL and NoSQL queries, executes them across MySQL, MongoDB, and PostgreSQL, and presents results with dynamic data visualizations. 
          </p>
          <a href="https://yashsawant027.github.io/Queryla2.0/">
            <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>
            Live App
          </button>
          </a>
          <a href="https://github.com/YashSawant027/Queryla2.0">
            <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
          </a>
        </div>
      </div>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={medibot} alt="" className='w-[95rem] bg-white'/>
        </div>

      
        <div className='md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Doctor Bot</h1>
          <p className='text-[20px] mb-9'>
            MediBot is a real-time AI-powered doctor assistant that helps users with health-related questions through a chat interface. It understands messages in multiple languages and transliterated text, suggests safe remedies and precautions, and advises when to consult a doctor—while prioritizing clarity, professionalism, and medical safety.
          </p>
          <a href="https://medi-bot-7pwo.vercel.app/">
            <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>Live App</button>
          </a>
          
          <a href="https://github.com/YashSawant027/MediBot"><FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/></a>
        </div>
      </div>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={energy} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='text-center md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Energy Tracker</h1>
          <p className='md:text-[20px] mb-9'>
            Energy Tracker is a web app that estimates household electricity usage based on user input and suggests tips if consumption exceeds expected levels. It helps promote smarter, energy-efficient habits.
          </p>
          <a href="https://yashsawant027.github.io/Energy-Tracker/">
            <button className='hover:translate-y-[-0.5rem] duration-500 text-[20px] text-white bg-yellow-400 px-10 py-3 font-bold rounded-[10px]'>
            Live App
            </button>
          </a>
          <a href="https://github.com/YashSawant027/Energy-Tracker">
            <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
          </a>
        </div>
      </div>

      <div className='grid grid-rows-1 md:grid-cols-[60%_40%] gap-5 place-items-center mt-16 px-5'>
        <div className='md:ml-[6rem] md:mb-0 mb-4'>
          <img src={ttt} alt="" className='w-[45rem]'/>
        </div>

      
        <div className='md:text-start md:pr-[10rem] '>
          <h1 className='text-[30px] font-bold mb-5'>Tic Tac Toe</h1>
          <p className='text-[20px] mb-9'>
            Tic Tac Toe is a classic two-player game built with React, featuring clean UI, responsive design, and simple game logic.
          </p>
          <a href="https://github.com/YashSawant027/tic-tac-toe">
            <FontAwesomeIcon icon={faGithub} className='text-[35px] cursor-pointer ml-5 hover:translate-y-[-0.5rem] duration-500'/>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Project;
