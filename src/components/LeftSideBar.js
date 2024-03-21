import React from 'react'
import { AiFillHome } from "react-icons/ai";
const LeftSideBar = () => {
  return (
    <div>
        <div className=''>
            <div>
                <img className='w-20 h-20 text-black'
                
                src='https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg' alt='twitter-logo'/>
            </div>
            <div className='mt-5'>
<div className='flex item-center'>
    <AiFillHome className='text-white text-2xl '/>
    <h1 className='text-white text-2xl px-3 font-semi-bold'>Home</h1>
</div>

            </div>
        </div>
    </div>
  )
}

export default LeftSideBar