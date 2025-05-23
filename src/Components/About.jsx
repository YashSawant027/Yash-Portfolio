import React from 'react';
import javaScript from './AboutAssets/js-official-svgrepo-com.svg';
import html from './AboutAssets/html-5-svgrepo-com.svg';
import cssimg from './AboutAssets/css-svgrepo-com.svg';
import reactimg from './AboutAssets/react-svgrepo-com.svg';
import pythonimg from './AboutAssets/python-svgrepo-com.svg';
import gitimg from './AboutAssets/git-branch-svgrepo-com.svg';
import mongoimg from './AboutAssets/mongo-svgrepo-com.svg';

function About() {
  return (
    <div className='bg-[#FAFAFA] w-full overflow-x-hidden px-4 py-10'>
      <div className='max-w-[1170px] mx-auto'>
        {/* Header Section */}
        <div className='max-w-[850px] mx-auto text-center'>
          <h1 className='text-[3rem] font-bold'>About Me</h1>
          <p className='bg-yellow-400 py-1 w-[4rem] mx-auto rounded-[10px]'></p>
          <p className='text-[1.25rem] mt-8 px-3'>
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-[9rem]'>
          <div>
            <h1 className='text-[30px] font-bold'>Get to know me!</h1>
            <p className='mt-5'>
              I'm a Full Stack Web Developer building and managing Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section.
            </p>
            <p className='mt-5'>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me.
            </p>
            <button className='mt-9 hover:-translate-y-2 transition duration-500 cursor-pointer bg-yellow-400 rounded-[10px] py-3 px-6 font-bold text-white'>
              Contact
            </button>
          </div>

          <div className='relative h-[80vh]'>
            <h1 className='text-[30px] font-bold mb-6'>My Skills</h1>

            <SkillCard img={javaScript} label="JavaScript" top="10%" left="50%" />
            <SkillCard img={html} label="HTML" top="20%" left="18%" />
            <SkillCard img={cssimg} label="CSS" top="30%" left="50%" />
            <SkillCard img={reactimg} label="React" top="40%" left="18%" />
            <SkillCard img={pythonimg} label="Python" top="20%" left="82%" />
            <SkillCard img={gitimg} label="Git" top="40%" left="82%" />
            <SkillCard img={mongoimg} label="MongoDB" top="50%" left="50%" />
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ img, label, top, left }) => (
  <div
    className='absolute transform -translate-x-1/2'
    style={{ top: top, left: left }}
  >
    <div className='bg-white py-2 md:h-[95px] md:w-[140px] h-[65px] w-[110px] border border-opacity-50 border-black rounded-[10px] flex flex-col items-center justify-center shadow-md hover:shadow-lg transition'>
      <img src={img} alt={label} className='md:w-[40px] w-[30px] rounded-[20px]' />
      <p className='md:text-[20px] text-[15px] font-bold'>{label}</p>
    </div>
  </div>
);

export default About;
