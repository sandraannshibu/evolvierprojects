import React from 'react'
import { Link } from 'react-router-dom';

const urldemo = () => {
    const id="65a21b3d4c18d34172653a0a"
  return (
    <div>urldemo
        <Link to={`/profile?userId=${id}`}></Link>
    </div>

  )
}

export default urldemo