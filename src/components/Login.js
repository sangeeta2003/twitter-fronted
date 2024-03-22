import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setLogin] = useState(true)

  const loginhandler = () => {
    setLogin(!isLogin)
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="flex flex-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-3 "
            width={'500px'}
            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg"
            alt="twitter-logo"
          />
        </div>
        <div className="bg-black text-gray-200 ml-11 mb-4 ">
          <div className="my-5 ">
            <h1 className="font-bold text-7xl ">Happening now</h1>
          </div>
          <h1 className="font-bold text-3xl mt-8 mb-2">Join today.</h1>
          <form className="flex flex-col w-[50%] mt-5">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-200 border border-gray-200 px-3 py-2 rounded-full my-1 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-200 border border-gray-200 px-3 py-2 rounded-full my-1 font-semibold"
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email"
              className="outline-blue-200 border border-gray-200 px-3 py-1 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-200 border border-gray-200 px-3 py-1 rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1098F0] border-none text-lg py-1 px-3 mt-4 font-bold justify-center text-white rounded-full my-1">
              Create account
            </button>
            <h1 className="font-bold mt-5">
              {isLogin
                ? 'Do not have an account ?'
                : 'Already have an account ?'}{' '}
              <span
                onClick={loginhandler}
                className="font-bold text-blue-500 cursor-pointer"
              >
                {isLogin ? 'signup' : 'Login'}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
