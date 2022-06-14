import { useEffect, useState, useRef } from 'react'
import './displayQuestion.css'
import { numberAudiosArray } from '../../audios/numberAudios/numberAudiosArray.js'

export default function DisplayQuestion() {
  const intervalId = useRef(0);
  const inputRef = useRef()

  const [arrayItem, setArrayItem] = useState(10)
  const [isStarting, setIsStarting] = useState(false)
  const [isNumberArrayChanged, setIsNumberArrayChanged] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)

  const currentAudio = new Audio(numberAudiosArray[arrayItem].audio)

  useEffect(() => {
    if (isStarting) {
      currentAudio.play()
      inputRef.current.focus()
    }
  }, [arrayItem, isNumberArrayChanged, isStarting])

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleEnterTimer = (timerValue) => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = 0;
    }

    const newIntervalId = setInterval(() => {
      inputRef.current.value = ''
      inputRef.current.className = 'input-answer'
      setArrayItem(getRandomIntInclusive(0, numberAudiosArray.length - 1))  //0 is the min number
      setIsNumberArrayChanged(!isNumberArrayChanged)
      setIsReadOnly(false)

      clearInterval(intervalId.current)
    }, timerValue);

    intervalId.current = newIntervalId;
  };

  function handleInput(event) {
    if (isStarting && numberAudiosArray[arrayItem].name === event.target.value) {
      handleEnterTimer(300) //Milliseconds
      setIsReadOnly(true)
      inputRef.current.className = 'right_answer input-answer'
    }
  }

  function onFocusHandler() {
    setIsFocus(true)
  }

  function onBlurHandler() {
    setIsFocus(false)
  }

  function startQuestion() {
    setIsStarting(!isStarting)
  }

  return (
    <div className="main-container">
      <div className='display-box'>
        <div className='question-text'>Question</div>
        <input
          className='input-answer'
          type="text"
          ref={inputRef}
          onChange={handleInput}
          placeholder={isFocus ? '' : 'Type your answer here'}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          disabled={isStarting ? false : true}
          readOnly={isReadOnly ? 'readonly' : ''}
        />
        <button
          className='button_numberDisplay'
          onClick={() => startQuestion()}>
          {isStarting ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}
