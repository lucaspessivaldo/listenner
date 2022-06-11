import { useEffect, useState } from 'react'
import './displayQuestion.css'
import { numberAudiosArray } from '../../audios/numberAudios/numberAudiosArray.js'

export default function DisplayQuestion() {
  const [arrayItem, setArrayItem] = useState(10)
  const [isStarting, setIsStarting] = useState(false)
  const myAudio = new Audio(numberAudiosArray[arrayItem].audio)

  useEffect(() => {
    if (isStarting) {
      myAudio.play()
    }
  }, [arrayItem])

  // console.log(arrayItem, numberAudiosArray[arrayItem])

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleInput(event) {
    console.log('eventKey', event.key)
    if (event.key === 'Enter') {
      if (numberAudiosArray[arrayItem].name === event.target.value) {
        console.log('right')
      } else {
        console.log('wrong')
      }
      setArrayItem(prev => getRandomIntInclusive(0, numberAudiosArray.length - 1))  //0 is the min number
      event.target.value = '';
    }
  }

  function startQuestion() {
    myAudio.play()
    setIsStarting(true)
  }

  return (
    <div className="main-container">
      <div className='display-box'>
        <div className='question-text'>Question</div>
        <input className='input-answer' type="text" onKeyUp={handleInput} />
        <button onClick={() => startQuestion()}>Start</button>
      </div>
    </div>
  )
}
