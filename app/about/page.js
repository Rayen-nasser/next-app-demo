import React from 'react'
import Todo from '../components/Todo'

export const metadata = { title:"about"}

const  About = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/5',{
    //=== SSR ===
    cache: 'no-cache',
    //=== ISG ===
    // next:{
    //   revalidate: 60 //60 second and will be get again data 
    // }
  })
  const user = await data.json()
  return (
    <div>
      <h1 className='title'>About</h1>
      <h2 className='title'>get API with Server Side Component: {user.title}</h2>
      <Todo/>
    </div>
  )
}

export default About
