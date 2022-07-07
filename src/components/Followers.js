import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/actions';

export default function Followers() {
  const data = useSelector(s=>s.followers)
  const dispatch = useDispatch()
  console.log(data);
  if(data.length === 0){
    return null
  }
  return (
    <div>
    {data?.map(el=>{
      return(
        <div key={el.id} onClick={()=>{dispatch(getUser(el?.login))}}>
        <img src={el?.avatar_url} alt='followers avatar'/>
        <h3>{el?.login}</h3>
        </div>
      )
    })
    }
    </div>
  )
}
