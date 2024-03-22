import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Feed from './Feed'
import Profile from './profile'

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default Body
