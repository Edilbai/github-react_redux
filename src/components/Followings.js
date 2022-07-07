import React from 'react'
import { useSelector } from 'react-redux'

export default function Details() {
  const data = useSelector(s=>s.followings)
  console.log(data);
  if(data.length === 0){
    return null
  }
  return (
    <div>
      {data?.map(el=>{
        return(
          <div key={el.id}>
          <img src={el?.avatar_url} alt='followings avatar'/>
          <h3>{el?.login}</h3>
          </div>
        )
        })
      }
    </div>
  )
}
