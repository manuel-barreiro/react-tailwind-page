import React from 'react'
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import { BiSupport, BiChip } from "react-icons/bi";
import supportImg from '../assets/support.jpg'

function Support() {
  return (
    <div className=''>
        <div>
            <img src={supportImg} alt="/" />
        </div>
        <div>
            <div>
                <h2>Support</h2>
                <h3>Finding the right team</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque placeat fugit rem veritatis repudiandae quia, aliquam voluptate accusamus laudantium suscipit corrupti accusantium error architecto incidunt? Iure perferendis nostrum amet ducimus?</p>
            </div>

            <div>
                <div>
                    <div>
                        <BsTelephone />
                        <h3>Sales</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In explicabo dolores minus, quia magnam nobis tenetur dolorum? Eos consectetur quas suscipit autem nulla doloribus dignissimos, eaque similique dolorem, adipisci ut.</p>
                    </div>

                    <div>
                        <p>Contact Us <BsArrowRight/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support