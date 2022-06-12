import { useEffect, useState } from 'react'
import './displayQuestion.css'
import { numberAudiosArray } from '../../audios/numberAudios/numberAudiosArray.js'

export default function DisplayQuestion() {
  const [arrayItem, setArrayItem] = useState(10)
  const [isStarting, setIsStarting] = useState(false)
  const [isNumberArrayChanged, setIsNumberArrayChanged] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const currentAudio = new Audio(numberAudiosArray[arrayItem].audio)

  useEffect(() => {
    if (isStarting) {
      currentAudio.play()
    }
  }, [arrayItem, isNumberArrayChanged, isStarting])

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleInput(event) {
    if (numberAudiosArray[arrayItem].name === event.target.value) {
      setArrayItem(getRandomIntInclusive(0, numberAudiosArray.length - 1))  //0 is the min number
      setIsNumberArrayChanged(!isNumberArrayChanged)
      event.target.value = '';
    }
  }

  function onFocusHandler() {
    setIsFocus(true)
  }

  function onBlurHandler() {
    setIsFocus(false)
  }

  function startQuestion() {
    setIsStarting(true)
  }

  return (
    <div className="main-container">
      <div className='display-box'>
        <div className='question-text'>Question</div>
        <input
          className='input-answer'
          type="text"
          onChange={handleInput}
          placeholder={isFocus ? '' : 'Type your answer here'}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <button onClick={() => startQuestion()}>Start</button>
      </div>
    </div>
  )
}
