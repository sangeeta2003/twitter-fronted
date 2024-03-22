import React from 'react'
import Post from './Post'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className="w-[50%] border border-gray-800">
      <div>
        <Post />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed
