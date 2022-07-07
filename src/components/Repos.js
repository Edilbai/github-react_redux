import React from 'react'
import { useSelector } from 'react-redux'


export default function Repos() {
  const data = useSelector(s=>s.repos)
  console.log(data);
  if(data.length === 0){
    return null
  }
  return (
    <div>
      {
        data?.map(el=>{
          return(
            <div key={el.id}>
              <h3>{el.name}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
