import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSailboat } from '@fortawesome/free-solid-svg-icons'

const ProgressDisplay = () => {
  return (
    <div className="container-md pb-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-11">
          <div className="border-bottom border-dark border-2 fs-1 text-dark text-start">
            <FontAwesomeIcon icon={faSailboat}/>
          </div>
          <div className="col-4 mt-1 text-start">
            <div className="text-dark fs-6">
              WPM: <span>56</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressDisplay