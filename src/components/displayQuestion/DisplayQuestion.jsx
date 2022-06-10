import { useState } from 'react'
import './displayQuestion.css'
import { numberAudiosArray } from '../../audios/numberAudios/numberAudiosArray.js'

export default function DisplayQuestion() {
  const [arrayItem, setArrayItem] = useState(0)
  const myAudio = new Audio(numberAudiosArray[arrayItem].audio)

  function handleInput(event) {
    if (event.key === 'Enter') {
      console.log(event.target.value)
      setArrayItem(parseInt(event.target.value))
    }
  }

  return (
    <div className="main-container">
      <div className='display-box'>
        <div className='question-text'>Question</div>
        <input className='input-answer' type="text" onKeyUp={handleInput} />
        <button onClick={() => myAudio.play()}>Play</button>
      </div>
    </div>
  )
}
