import React from 'react'
import {BsCheck} from "react-icons/bs";

function Pricing() {
  return (
    <div name='pricing' className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

        <div className='max-w-[1240px] mx-auto px-2 py-12 relative'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl'>PRICING</h2>
                <h3 className='text-5xl text-white font-bold py-8'>The right price for your research.</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam quaerat natus fugiat dolore nisi dolorum reiciendis architecto similique voluptates.</p>
            </div>

            <div className='grid md:grid-cols-2'>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
                    <span className='bg-indigo-200 text-indigo-900 py-1 px-3 rounded-2xl text-sm'>STANDARD</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl flex items-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur?</p>
                    <div>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <button className='rounded-2xl p-3 my-3 w-full'>Get Started</button>
                    </div>
                </div>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
                    <span className='bg-indigo-200 text-indigo-900 py-1 px-3 rounded-2xl text-sm'>PREMIUM</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl flex items-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur?</p>
                    <div>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-2 text-lg'><BsCheck size={30} className='mr-4 text-green-500' />Lorem ipsum dolor sit amet.</p>
                        <button className='rounded-2xl p-3 my-3 w-full'>Get Started</button>
                    </div>
                </div>

                

            </div>

        </div>

    </div>
  )
}

export default Pricing