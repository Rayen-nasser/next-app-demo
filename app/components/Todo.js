"use client"

import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [data, setData] = useState({})
    useEffect(async()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const user = await data.json()
        setData(user)
    },[])
  return (
    <div>
      <h2 className='title'>get API with Client Side Component: {data.title}</h2>
    </div>
  )
}

export default Todo
