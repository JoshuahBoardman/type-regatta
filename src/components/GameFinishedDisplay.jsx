import React from 'react'
import Button from './Button'

const GameFinishedDisplay = ({ setGameState }) => {
  return (
    <div className='mb-5 mt-3 text-center '>
        <h3 className="text-dark h1">Regatta Results</h3>
        <div className='mt-3 mb-4 fs-5'>
            <div className='text-light'>
            <span className='fw-bold'>Time Taken:</span> <span>1:20</span>
        </div>
            <div className='text-light'>
                <span className='fw-bold'>WPM:</span> <span>56</span>
            </div>
        </div>
        <div className='d-flex gap-3 mt-5 justify-content-center align-items-center'>
            <Button setGameState={setGameState} newGameState={1}  text={"New Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
            <Button setGameState={setGameState} newGameState={0}  text={"Finish Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
        </div>
    </div>
     
   
  )
}

export default GameFinishedDisplay