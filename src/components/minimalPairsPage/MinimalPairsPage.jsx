import { useState } from 'react'
import { minimalPairsArray } from '../../audios/minimalPairsAudios/minimalPairsArray.js'
import './minimalPairsPage.css'

export default function MinimalPairsPage() {
  const [toggleButtonStart, setToggleButtonStart] = useState(true)
  const soundArray = [...minimalPairsArray]

  function onKeyEnterHandle(event) {
    if (event.key === 'Enter') {
      console.log('Ok')
      const sound = new Audio(soundArray[0].audio)
      sound.play()
    }
  }

  function inputTextHandle(event) {
    console.log(event.target.value)
  }

  function startButtonHandle() {
    setToggleButtonStart(prev => !prev)
  }

  return (
    <div className='container'>
      <div className='box-minimalPairs'>
        <p className='box-title'>Minimal Pairs</p>
        <input
          className='input-answer'
          type='text'
          onChange={inputTextHandle}
          onKeyDown={onKeyEnterHandle}
        />
        <button onClick={startButtonHandle}>{toggleButtonStart ? 'Start' : 'Pause'}</button>
      </div>
    </div>
  )
}
