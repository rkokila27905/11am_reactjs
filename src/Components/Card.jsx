import React from 'react'

export default function Card({name,age}) {
  return (
    <div className='container'>
      <h1>Name : {name} </h1>
      <h1>Age : {age} </h1>

    </div>
  )
}