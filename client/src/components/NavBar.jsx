import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [open,setOpen]=useState(false);

  return (
  <div className='shadow-md w-full sticky top-0 left-0 z-50 border-b border-[#407BFF]'>
    <div className='md:flex items-center justify-between bg-[#000308] py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-white'>
      <span className='text-3xl text-[#407BFF] mr-1'>
        <GiArtificialIntelligence/>
     </span>
     ImaginAI
    </div>
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    { open ? <AiOutlineClose/> : <GiHamburgerMenu/> }
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#000308] md:z-auto z-[-1]
     left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                   <Link to='/'>
                   <li className='md:ml-8 text-xl md:my-0 my-7 text-white hover:text-[#407BFF] duration-500'>
                    Home
                   </li>
                   </Link>
                   <Link to='/createimage'>
                   <li className='md:ml-8 text-xl md:my-0 my-7 text-white hover:text-[#407BFF] duration-500'>
                        Image-Generation
                    </li>
                   </Link>
                   <Link to='/textcompletion'>
                    <li className='md:ml-8 text-xl md:my-0 my-7 text-white hover:text-[#407BFF] duration-500'>
                        Text-Completion
                    </li>
                   </Link>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href="https://beta.openai.com/overview" rel='noreferrer' target='_blank' className='text-white hover:text-[#407BFF] duration-500'>
                            API
                        </a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href="https://beta.openai.com/docs/introduction" rel='noreferrer' target='_blank' className='text-white hover:text-[#407BFF] duration-500'>
                            Docs
                        </a>
                    </li>
    </ul>
    </div>
  </div>

  )
}

export default NavBar