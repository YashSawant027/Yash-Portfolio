import React from 'react';

function Contact() {
  return (
    <div className='w-full bg-[#f5f5f5] px-4 py-20 min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl w-full'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Let's Connect
          </h1>
          <div className='h-1.5 w-24 bg-yellow-400 mx-auto rounded-full mb-6'></div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Email Card */}
          <div className='bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100'>
            <div className='w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-colors duration-300'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-500 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Email Me</h3>
            <p className='text-gray-500 mb-8'>yashsawan70@gmail.com</p>
            <a
              href="mailto:yashsawan70@gmail.com"
              className='inline-block w-full py-3 px-6 rounded-lg border-2 border-yellow-400 text-yellow-500 font-semibold hover:bg-yellow-400 hover:text-white transition-colors duration-300'
            >
              Send an Email
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className='bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100'>
            <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0077b5] transition-colors duration-300'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0077b5] group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>LinkedIn</h3>
            <p className='text-gray-500 mb-8'>Yash Sawant</p>
            <a
              href="https://www.linkedin.com/in/YashSawant027/"
              target="_blank"
              rel="noreferrer"
              className='inline-block w-full py-3 px-6 rounded-lg bg-[#0077b5] text-white font-semibold hover:bg-[#005582] transition-colors duration-300 shadow-md'
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
