import React from 'react'
import TextDisplay from './TextDisplay'
import TextInput from './TextInput'
import Button from './Button'

const gameDisplay = ({ setGameState }) => {
  return (
    <>
    <h3 className='text-secondary mt-2'>Type The Passage Below</h3>
    <TextDisplay />
    <TextInput />
    <Button setGameState={setGameState} newGameState={1}  text={"Restart Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
    </>
  )
}

export default gameDisplay