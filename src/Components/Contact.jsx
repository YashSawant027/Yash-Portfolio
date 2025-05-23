import React, { useState } from 'react'

function Contact() {

  let [userData,setuserData] = useState(
    {
      uname:'',
      uemail:'',
      umssg:'',
    }
  )
    
  let getValue = (event) =>{
    let oldData = {...userData}
    let inputName = event.target.name
    let inputValue = event.target.value
    oldData[inputName] = inputValue
    setuserData(oldData)
  }

    let HandleSubmit = (event) => {
       
            event.preventDefault()
        
    }

  return (
    <div className='w-[100%] bg-[rgb(245_245_245)] px-3 pb-[8rem]'>
        <div className='max-w-[800px] m-auto pt-[4rem]'>
            <h1  className='text-center text-[3rem] font-bold'>Contact</h1>
            <p className='bg-yellow-400 py-1 w-[4rem] text-center m-auto rounded-[10px]'></p>
            <p className='pt-7 text-center text-[20px] '>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        
            <form className='bg-white py-5 rounded-[15px] px-8 mt-10 relative pb-[8rem]'onSubmit={HandleSubmit}>

                <label className='block my-4'>Name</label>
                <input type="text" name='uname' onChange={getValue} value={userData.uname} className='bg-[#F0F0F0] text-[#333] w-full h-[50px] rounded-[10px] px-3' placeholder='Enter Your Name'/>
                
                <label className='block my-4'>Email</label>
                <input type="email" name='uemail' onChange={getValue} value={userData.uemail} className='bg-[#F0F0F0] text-[#333] w-full h-[50px] rounded-[10px] px-3' placeholder='Enter Your Email'/>
            
                <label className='block my-4'>Message</label>
                <textarea rows={7} name='umssg' onChange={getValue} value={userData.umssg} placeholder='Enter Your Message' className='resize-none py-3 bg-[#F0F0F0] text-[#333] w-full rounded-[10px] px-3'/>

                <button className='bg-yellow-400 hover:translate-y-[-0.5rem] duration-500 text-white py-4 px-6 text-[20px] mt-7 rounded-[10px] absolute right-[30px] bottom-[40px]'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact