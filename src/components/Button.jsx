import React from 'react'

const Button = ({ setGameState, newGameState, text, backgroundColor, textColor }) => {
  return (
    <button type='button' className={`btn ${backgroundColor} ${textColor} fw-bold shadow-sm`} onClick={() => setGameState(newGameState) }>{text}</button>
  )
}

export default Button