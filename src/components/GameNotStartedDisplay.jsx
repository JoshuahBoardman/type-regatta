import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

const GameNotStartedDisplay = ({ setGameState }) => {
  return (
        <div className="my-5">
            <h3 className='text-primary h2'>
                Type Your Way to Victory 
                <span className='ms-2 text-light'> <FontAwesomeIcon icon={faFlag} /></span>
            </h3>
            <p className='my-4 mb-md-5 text-light text-start fs-5'>Type from a randomly generated passage and find out how fast you can cross the finish line.</p>
            <Button setGameState={setGameState} newGameState={1}  text={"Start Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
        </div>
  )
}

export default GameNotStartedDisplay