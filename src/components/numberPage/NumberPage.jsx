import { useEffect, useState, useRef } from 'react'
import { numberAudiosArray } from '../../audios/numberAudios/numberAudiosArray.js'
import './numberPage.css'

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
      inputRef.current.className = 'numberPage_input_answer'
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
      inputRef.current.className = 'numberPage_right_answer  numberPage_input_answer'
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
    <div className="numberPage_main_container">
      <div className='numberPage_display-box'>
        <div className='numberPage_main_text'>Numbers</div>
        <input
          className='numberPage_input_answer'
          type="text"
          ref={inputRef}
          onChange={handleInput}
          placeholder={isFocus ? '' : 'Type the number here'}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          disabled={isStarting ? false : true}
          readOnly={isReadOnly ? 'readonly' : ''}
        />
        <button
          className='numberPage_button'
          onClick={() => startQuestion()}>
          {isStarting ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}
