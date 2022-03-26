import React, { useState, useEffect} from 'react'
import ProgressDisplay from './ProgressDisplay'
import Timer from "./Timer";
import TextDisplay from './TextDisplay'
import TextInput from './TextInput'
import Button from './Button'

const GameDisplay = ({ setGameState, quote }) => {
  const [quoteAsArray, setQuoteAsArray] = useState(quote.split(' '));
  const [quoteArrayIndex, setQuoteArrayIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (quoteArrayIndex === quoteAsArray.length){
      setGameState(3)
    }
  })

  // Checks if user input is equal to the current quoteArrayIndex
  function doesInputEqualQuoteArrayValue(e) {
    console.log("THis ran")
    if(e.keyCode !== 32)  return
    console.log(inputValue)
    if(inputValue === quoteAsArray[quoteArrayIndex]) {
      console.log("THIS IS CORRECT")
      setQuoteArrayIndex(prevIndex => prevIndex + 1)
      setInputValue("");
      return
    }
    console.log("THIS IS WRONG")
  }

  return (
    <>
      <h3 className='text-dark mb-5 h2'>Type The Passage Below</h3>
      <Timer setGameState={setGameState} />
      <ProgressDisplay />
      <TextDisplay quote={quoteAsArray.join(" ")} />
      <TextInput inputValue={inputValue} setInputValue={setInputValue} doesInputEqualQuoteArrayValue={doesInputEqualQuoteArrayValue}/>
      <Button setGameState={setGameState} newGameState={1}  text={"Restart Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
    </>
  )
}

export default GameDisplay