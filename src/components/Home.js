import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import Feed from './Feed'

const Home= () => {
  return (
    <div className=' bg-black h-screen'>
        <div className='flex w-[80%] h-full mx-auto justify-between'>
        <LeftSideBar/>

<Feed/>
<RightSideBar/>
        </div>

    </div>
  )
}

export default Home
