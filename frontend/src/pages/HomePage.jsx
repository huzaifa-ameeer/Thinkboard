import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimit from '../components/RateLimit'

const HomePage = () => {

  const [isRateLimited, setRateLimited] = useState(false)

  return (
    <div className='min-h-screen'>
        <Navbar/>
        {isRateLimited && <RateLimit/>}
    </div>
  )
}

export default HomePage