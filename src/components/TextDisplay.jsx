import React from 'react'

const TextDisplay = ( { quote }) => {
  return (
    <div className="bg-light text-dark p-4 rounded shadow my-4 text-start">
        {quote}
    </div>
  )
}

export default TextDisplay