import React from 'react'
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import { BiSupport, BiChip } from "react-icons/bi";
import supportImg from '../assets/support.jpg'

function Support() {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img src={supportImg} alt="/" className='w-full h-full object-cover mix-blend-overlay' />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl text-slate-300 text-center uppercase pt-8'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-3 text-3xl text-slate-300 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque placeat fugit rem veritatis repudiandae quia, aliquam voluptate accusamus laudantium.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'> 
                <div className='bg-white rounded-xl shadow-2xl hover:scale-105 ease-in-out duration-500'>
                    <div className='p-8'>
                        <BsTelephone size={50} className='p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]'/>
                        <h3 className='text-2xl my-6 font-bold'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In explicabo dolores minus, quia magnam nobis tenetur dolorum?</p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl hover:scale-105 ease-in-out duration-500'>
                    <div className='p-8'>
                        <BiSupport size={50} className='p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]'/>
                        <h3 className='text-2xl my-6 font-bold'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In explicabo dolores minus, quia magnam nobis tenetur dolorum?</p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl hover:scale-105 ease-in-out duration-500'>
                    <div className='p-8'>
                        <BiChip size={50} className='p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]'/>
                        <h3 className='text-2xl my-6 font-bold'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In explicabo dolores minus, quia magnam nobis tenetur dolorum?</p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support