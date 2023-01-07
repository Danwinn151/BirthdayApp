import React from 'react'

function Header({people}) {
  return (
    <div className='container'>
    <h3 className='font-poppins font-semibold text-lg text-black'>
      {people.length} Celebs Birthday Today
    </h3>
    
    </div>
  )
}

export default Header