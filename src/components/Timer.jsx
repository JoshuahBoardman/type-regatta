import React, { useState, useEffect } from 'react'

const Timer = ({ setGameState }) => {
    const [time, setTime] = useState(300)


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t - 1)

      return () => {
        clearInterval(interval);
      }
    }, 1000)
  }, [])

  useEffect(() => {
    if (time === 0) {
      setGameState(3)
    }
  })
  
  return (
    <div className="container-md pb-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-11 col-sm-4 text-center bg-light py-1 rounded-pill shadow-sm">
                <div className='text-dark fs-4 '>
                Timer: <span>{Math.floor(time / 60)}:{(time % 60) < 10 ? `0${time % 60}`: time % 60}</span></div>
            </div>
        </div>
    </div>
  )
}

export default Timer