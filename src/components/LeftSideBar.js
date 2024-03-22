import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiMessageSquare } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { PiBookmarkSimple } from 'react-icons/pi'
import { BiLogOutCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const LeftSideBar = () => {
  return (
    <div className="w-[30%]">
      <div className="ml-9">
        <div>
          <img
            className="w-10 h-10 text-black mt-2 mx-3"
            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg"
            alt="twitter-logo"
          />
        </div>
        <Link to="/" className="mt-7 mx-4">
          <div className="flex item-center">
            <AiFillHome className="text-white text-2xl " />
            <h1 className="text-white text-2xl px-3 font-semi-bold">Home</h1>
          </div>
        </Link>
        <Link className="mt-7 mx-4">
          <div className="flex item-center">
            <CiSearch className="text-white text-2xl " />
            <h1 className="text-white text-xl px-3 font-semi-bold">Explore</h1>
          </div>
        </Link>
        <Link className="mt-7 mx-4">
          <div className="flex item-center">
            <IoIosNotificationsOutline
              className="text-white text-2xl "
              size="25px"
            />
            <h1 className="text-white text-xl px-3 font-semi-bold">
              Notifications
            </h1>
          </div>
        </Link>
        <Link className="mt-7 mx-4">
          <div className="flex item-center">
            <FiMessageSquare className="text-white text-2xl " size="24px" />
            <h1 className="text-white text-xl px-3 font-semi-bold">Messages</h1>
          </div>
        </Link>

        <Link to="/profile" className="mt-7 mx-4">
          <div className="flex item-center">
            <CgProfile className="text-white text-2xl " />
            <h1 className="text-white text-xl px-3 font-semi-bold">Profile</h1>
          </div>
        </Link>
        <Link className="mt-7 mx-4">
          <div className="flex item-center">
            <PiBookmarkSimple className="text-white text-2xl " />
            <h1 className="text-white text-xl px-3 font-semi-bold">
              Bookmarks
            </h1>
          </div>
        </Link>
        <Link className="mt-7 mx-4">
          <div className="flex item-center">
            <BiLogOutCircle className="text-white text-2xl " />
            <h1 className="text-white text-xl px-3 font-semi-bold">Logout</h1>
          </div>

          <button className="bg-[#1098F0] px-5 py-3 border-none w-1/2 text-white rounded-full mt-7 font-bold mb-2 mr-5">
            Post
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LeftSideBar
