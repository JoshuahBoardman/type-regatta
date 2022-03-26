import React, { useState, useEffect } from 'react'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

const TextInput = ({ inputValue, setInputValue, doesInputEqualQuoteArrayValue}) => {

  useEffect(() => {
    if (inputValue === " ") {
      setInputValue("");
    }
  }, [inputValue, setInputValue])

  const tooltips = document.querySelectorAll('.hoverInfo')
      tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
      })

  return (
    <form className='mb-5' onSubmit={e => e.preventDefault()} >
        <label htmlFor="textInput" className='form-label visually-hidden'>Text Input</label>
        <div className="input-group rounded shadow-sm">
            <input type="text" id='textInput' className='form-control bg-light text-dark ' placeholder='Type from the passage above...' value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDownCapture={doesInputEqualQuoteArrayValue} autoComplete="off" />
            <span className="input-group-text bg-dark">
                <span className="hoverInfo text-light" data-bs-placement="bottom" title="Enter text from the passage about">
                <FontAwesomeIcon icon={faQuestion} />
                </span>
            </span>
        </div>
    </form>
  )
}

export default TextInput