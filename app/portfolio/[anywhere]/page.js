import React from 'react'

const Unknownpage = (props) => {
  return (
    <>
        <h1 className='title' style={{color:'red'}}>when you go to unknown page you will found me</h1>
        <h2  className='title'>{props.params.anywhere}</h2>
    </>
  )
}

export default Unknownpage
