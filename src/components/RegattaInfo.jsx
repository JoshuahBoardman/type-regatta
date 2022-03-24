import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

const RegattaInfo = () => {
  return (
    <>
        <div className="my-5">
            <h3 className='text-secondary h2 mb-5'>
                Type Your Way to Victory 
                <span className='ms-2 text-primary'> <FontAwesomeIcon icon={faFlag} /></span>
            </h3>

            <div className="accordion text-dark shadow-sm" id="notes">
                <div className="accordion-item bg-light">
                  <h2 className="accordion-heade" id="heading-1">
                    <button className="accordion-button fw-bold bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#note-1" aria-expanded="true" aria-controls="note-1">
                      How To Play
                    </button>
                  </h2>
                  <div id="note-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                    <div className="accordion-body text-start">
                      <p><span className='fw-bold'>Explanation:</span> Once the game starts, the game will display a passage, an input field, and a timer. Type the passage verbatim in the text input provided. Each time you press the space key, the word entered before the space will either pass or fail based on if the user typed it correctly. If entered correctly, you can start typing the next word immediately; otherwise, you must correct the word to carry on. Once you have fully typed out the passage or the timer has run out, the game will end and display how long it took to type out the paragraph and your WPM (words per minute.)</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h2 className="accordion-header" id="heading-2">
                    <button className="accordion-button collapsed fw-bold bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#note-2" aria-expanded="false" aria-controls="note-2">
                      Improve your accuracy 
                    </button>
                  </h2>
                  <div id="note-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
                    <div className="accordion-body text-start">
                      <p><span className='fw-bold'>Lorem ipsum dolor:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus obcaecati minima molestiae distinctio ipsam! Voluptatem nesciunt culpa sint esse repudiandae recusandae hic accusantium at labore quaerat, perferendis, quo dolor quae delectus velit eaque numquam maiores dignissimos placeat, maxime optio?</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h2 className="accordion-header" id="heading-3">
                    <button className="accordion-button collapsed fw-bold bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#note-3" aria-expanded="false" aria-controls="note-3">
                      Increase Your Speed
                    </button>
                  </h2>
                  <div id="note-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
                    <div className="accordion-body text-start">
                      <p><span className='fw-bold'>Lorem ipsum:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur magni qui voluptatem autem dicta minima culpa illo non animi. Cumque doloribus modi corporis recusandae, voluptate possimus autem ut quisquam?</p>
                    </div>
                  </div>
                </div>
              </div>
            
            {/* <p className='my-4 mb-md-5 text-light text-start fs-5'>Type from a randomly generated passage and find out how fast you can cross the finish line.</p> */}
        </div>
    </>
  )
}

export default RegattaInfo