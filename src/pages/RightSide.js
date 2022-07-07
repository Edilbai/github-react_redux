import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FollowingsPage from './FollowingsPage'
import FollowersPage from './FollowersPage'
import ReposPage from './ReposPage'

export default function RightSide() {
  return (
    <Routes>
      <Route path='/following' element={<FollowingsPage/>}/>
      <Route path='/followers' element={<FollowersPage/>}/>
      <Route path='/' element={<ReposPage/>}/>
    </Routes>
  )
}
