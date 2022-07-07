import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, getUser } from '../redux/actions';

export default function Header() {
  const dispatch = useDispatch()
  const [value, setValue]=useState()

  const click = (e)=>{
    e.preventDefault()
    dispatch(getUser(value))
    dispatch(getRepos(value))
  }

  return (
    <div>
      <form onSubmit={(e)=>click(e)}>
        <input type='text' placeholder='enter user name'
          onChange={(e)=>setValue(e.target.value)}
        />
        <button type='sumbit'>Search</button>
      </form>
    </div>
  )
}
