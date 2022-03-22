import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSailboat } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='navbar navbar-expand-lg nav-primary bg-primary shadow-sm'>
        <div className="d-flex container-xxl justify-content-center align-items-center">
            <span className="navbar-brand mb-0 text-dark fw-bold fs-3">
            <FontAwesomeIcon icon={faSailboat}/>
                Type Regatta
            </span>
        </div>
    </header>
  )
}

export default Header