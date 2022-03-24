import React from 'react'
import ProgressDisplay from './ProgressDisplay'
import Timer from "./Timer";
import TextDisplay from './TextDisplay'
import TextInput from './TextInput'
import Button from './Button'

const gameDisplay = ({ setGameState, quote }) => {
  return (
    <>
      <h3 className='text-dark mb-5 h2'>Type The Passage Below</h3>
      <Timer setGameState={setGameState} />
      <ProgressDisplay />
      <TextDisplay quote={quote} />
      <TextInput />
      <Button setGameState={setGameState} newGameState={1}  text={"Restart Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
    </>
  )
}

export default gameDisplay