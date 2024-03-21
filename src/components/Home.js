import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import Feed from './Feed'

const Home= () => {
  return (
    <div className=' bg-black'>
        <div className='flex w-[80%] h-full mx-auto justify-between'>
        <LeftSideBar/>
<RightSideBar/>
<Feed/>
        </div>

    </div>
  )
}

export default Home
