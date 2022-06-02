import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import "./reserve.css"

function Reserve({setOpen,hotelId}) {
  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark } className="rClose" onClick={()=>setOpen(false)} />
            <span>Select your rooms:</span>
        </div>
    </div>
  )
}

export default Reserve