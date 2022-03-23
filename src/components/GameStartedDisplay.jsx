import React from 'react'
import ProgressDisplay from './ProgressDisplay'
import TextDisplay from './TextDisplay'
import TextInput from './TextInput'
import Button from './Button'

const gameDisplay = ({ setGameState }) => {
  return (
    <>
    <h3 className='text-dark mt-2 mb-5 h2'>Type The Passage Below</h3>
    <ProgressDisplay />
    <TextDisplay />
    <TextInput />
    <Button setGameState={setGameState} newGameState={1}  text={"Restart Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
    </>
  )
}

export default gameDisplay