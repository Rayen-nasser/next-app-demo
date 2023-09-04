import React from 'react'

export const metadata = { title:"portfolio"}

const layout = ({children}) => {
  return (
    <div style={{
        borderRadius: '10px',
        background: 'orange',
        marginTop:'50px',
        padding: '15px',
    }}>
    hello from layout 
      {children}
    </div>
  )
}

export default layout
