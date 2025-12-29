import { useState } from 'react'
import heroBg from './assets/heroBg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Nav from './Components/NavBar/Nav'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Project from './Components/Project'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />

      <section
        id="home"
        className="grid md:h-[98vh] h-[130vh] w-full bg-cover bg-center bg-no-repeat text-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="lg:flex flex-col bg-white px-2 py-2 w-[60px] lg:absolute hidden top-[250px] left-0 z-10 shadow-lg rounded-r-md">
          <p className="mb-3 text-[30px] text-center hover:bg-slate-200 py-1 rounded-[10px] cursor-pointer">
            <a href="https://www.linkedin.com/in/YashSawant027/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>
          <p className="mb-3 text-[30px] text-center hover:bg-slate-200 py-1 rounded-[10px] cursor-pointer">
            <a href="https://github.com/YashSawant027">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>

        <div className="grid place-items-center m-auto max-w-[900px] px-6 text-black">
          <h1 className="md:text-[4rem] text-[3rem] uppercase font-bold">
            Hey, I'm <br />
            <span className="md:text-[4.5rem] text-[3.5rem]">Yash Sawant</span>
          </h1>
          <p className="md:text-[1.5rem] text-[1.25rem] mt-7 md:px-3 xl:px-0">
            Crafting responsive web experiences with React and scalable backend APIs. Focused on clean code, intuitive design, and user-centric solutions.
          </p>
          <a href="https://drive.google.com/file/d/1ONQqjwT0zOxg5TSPaTbDOMs-0j5T-zHx/view?usp=drive_link">
            <button
            className="uppercase py-4 px-14 bg-yellow-400 mt-9 rounded-[10px] text-[1.5rem] font-bold text-white hover:translate-y-[-0.5rem] duration-500"
          >
            Resume
          </button>
          </a>
          
        </div>
      </section>

      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App
