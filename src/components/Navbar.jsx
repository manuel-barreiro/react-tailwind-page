import React, {useState} from 'react'
import { MdMenu, MdOutlineClose } from "react-icons/md";

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
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platforms</li>
                <li>Pricing</li>
            </ul>
            <div className='hidden lg:flex pr-4'>
              <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='lg:hidden' onClick={handleClick}>
              {!nav ? <MdMenu size={30}/> : <MdOutlineClose size={30}/>}
            </div>
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>About</li>
          <li className='border-b-2 border-zinc-300 w-full'>Support</li>
          <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
          <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
          <div className='flex flex-col my-4'>
              <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
          </div>
        </ul>

    </nav>
  )
}

export default Navbar
