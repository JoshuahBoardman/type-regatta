import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSailboat } from '@fortawesome/free-solid-svg-icons'

const ProgressDisplay = () => {
  return (
    <div className="container-md pb-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-11 col-md-8 col-lg-7">
          <div className="border-bottom border-dark border-2 fs-1 text-dark">
            <FontAwesomeIcon icon={faSailboat}/>
          </div>
          <div className="col-md-2 mt-1">
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