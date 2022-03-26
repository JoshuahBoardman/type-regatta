import React, { useState, useEffect} from 'react'
import ProgressDisplay from './ProgressDisplay'
import Timer from "./Timer";
import TextDisplay from './TextDisplay'
import TextInput from './TextInput'
import Button from './Button'
import { type } from '@testing-library/user-event/dist/type';

const GameDisplay = ({ setGameState, quote, setTimeTaken, wordsPerMinute, setWordsPerMinute }) => {
  const startingTime = +300

  const [quoteAsArray] = useState(quote.split(' '));
  const [quoteArrayIndex, setQuoteArrayIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [time, setTime] = useState(startingTime);
  const [progressBarValue, setProgressBarValue] = useState(0);
  
  useEffect(() => {
    setTimeTaken(startingTime - time);
  })

  useEffect(() => {
    setWordsPerMinute(parseInt(quoteArrayIndex/((startingTime - time)/60)));
  })

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
      setProgressBarValue(prevValue => prevValue + (100/quoteAsArray.length))
      setInputValue("");
      return
    }
    console.log("THIS IS WRONG")
  }

  return (
    <>
      <h3 className='text-dark mb-5 h2'>Type The Passage Below</h3>
      <Timer setGameState={setGameState} time={time} setTime={setTime} />
      <ProgressDisplay progressBarValue={progressBarValue} wordsPerMinute={wordsPerMinute}/>
      <TextDisplay quote={quoteAsArray.join(" ")} />
      <TextInput inputValue={inputValue} setInputValue={setInputValue} doesInputEqualQuoteArrayValue={doesInputEqualQuoteArrayValue}/>
      <Button setGameState={setGameState} newGameState={1}  text={"Restart Regatta"} backgroundColor="btn-primary" textColor="text-light"/>
    </>
  )
}

export default GameDisplay