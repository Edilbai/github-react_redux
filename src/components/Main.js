import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFollowers, getFollowing } from '../redux/actions'
import './Components.css'

export default function Main() {
  const data = useSelector((s)=>s.user)
  const dispatch = useDispatch()
  console.log(data);
  if(data.length === 0){
    return <h5>Enter the user name</h5>
  }else{
  return (
    <div className='container'>
      <img src={data?.avatar_url} alt='users avatar'/>
      <h3>{data?.name}</h3>
      <h5>{data?.login}</h5>
      <h5>{data?.bio}</h5>
      <button>FOLLOW</button>
      <div className='follow_block'>
        <div onClick={()=>{dispatch(getFollowers(data?.login))}}>
        <Link to='/followers'>
          {/* icon */}
          <p>{data?.followers} followers</p>
        </Link>
        </div>
        <div onClick={()=>dispatch(getFollowing(data?.login))}>
        <Link to='/following'>
            {/* icon */}
          <p>{data?.following} following</p>
        </Link>
        </div>
      </div>
    </div>
  )
}}
