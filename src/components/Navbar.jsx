import React, {useState} from 'react'
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Link, animateScroll as scroll, } from 'react-scroll'

function Navbar() {

  const [nav, setNav] = useState(false)

  function handleClick() {
    setNav(prevState => !prevState)
  }

  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-4 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
            </div>
            <ul className='hidden lg:flex'>
              <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
              <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
              <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
              <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            </ul>
            <div className='hidden lg:flex pr-4'>
              <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='lg:hidden mr-4' onClick={handleClick}>
              {!nav ? <MdMenu size={30}/> : <MdOutlineClose size={30}/>}
            </div>
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link onClick={handleClick} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link onClick={handleClick} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li><Link onClick={handleClick} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li><Link onClick={handleClick} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          <div className='flex flex-col my-4'>
              <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
          </div>
        </ul>

    </nav>
  )
}

export default Navbar

