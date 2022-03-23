import React from 'react'
import Button from './Button'

const RegattaIntro = ( { setGameState }) => {
  return (
    <>
      <h1 className="display-4 text-dark text-center fw-bold">Welcome to Type Regatta</h1>
      <p className="lead fs-5 mt-3 text-dark">Type Regatta is a game that helps you imporve your typing efficency while having fun.</p>
      <div className="mt-4 mt-lg-5">
        <Button setGameState={setGameState} newGameState={1}  text={"Start Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
      </div>
    </>
  )
}

export default RegattaIntro