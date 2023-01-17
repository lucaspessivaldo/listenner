import type { WordsArray } from '../../common/types'
import QuestionButton from '../../components/learn/QuestionButton'
import SpeakerButton from '../../components/learn/SpeakerButton'

import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

import alphabet from '../../assets/audios/alphabet/alphabet'
import number from '../../assets/audios/numbers/numbers'

import rightsound from '../../assets/audios/right-sound.wav'
import wrongsound from '../../assets/audios/error-sound.wav'

const right = new Audio(rightsound)
const wrong = new Audio(wrongsound)

interface MyObject {
  alphabet: WordsArray[];
  number: WordsArray[];
  [key: string]: any;
}

const words: MyObject = { alphabet, number }

import { useEffect, useState, useRef } from 'react'

function getRandomIntInclusive(max: number) {
  const min = 0
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPosition(array: WordsArray[]) {
  const randomNumber = getRandomIntInclusive(array.length - 1)
  const randomWord = array[randomNumber]
  return randomWord
}


export default function MainDisplay() {
  const selectedTopic = useSelector((state: RootState) => state.selectedTopic.value)
  const [currentWords, setCurrentWords] = useState<WordsArray[]>(words[selectedTopic.toLowerCase()])
  const [rightAnswer, setRightAnswer] = useState<WordsArray>(words[selectedTopic.toLowerCase()])
  const [isAnswerd, setIsAnswerd] = useState<Boolean>(false)
  const [selectedButton, setSelectedButton] = useState<String>('')
  const keyboardStateInput = useSelector((state: RootState) => state.selectedTopic.keyboardInput)
  const nextQuestionButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const restartQuestion = () => {
    let firstWord = getRandomPosition(words[selectedTopic.toLowerCase()])
    let secondWord = getRandomPosition(words[selectedTopic.toLowerCase()])
    setIsAnswerd(false)
    setSelectedButton('')
    firstWord.audio.play()

    while (secondWord.text === firstWord.text) {
      secondWord = getRandomPosition(words[selectedTopic.toLowerCase()])
    }

    if (inputRef.current != null) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }

    const array = [firstWord, secondWord]
    array.sort(() => Math.random() - 0.5)

    setRightAnswer(firstWord)
    setCurrentWords(array)
  }

  const checkAnswer = () => {
    if (isAnswerd) {
      setIsAnswerd(false)
      setSelectedButton('')
      restartQuestion()
      return
    }

    if (nextQuestionButtonRef.current != null) {
      nextQuestionButtonRef.current.focus()
    }

    const isRightAnswer = selectedButton === rightAnswer.text

    if (isRightAnswer) right.play()
    else wrong.play()

    setIsAnswerd(true)
  }

  useEffect(() => {
    restartQuestion()
  }, [selectedTopic])

  useEffect(() => {
    if (selectedButton === '') return
    checkAnswer()
  }, [selectedButton])


  return (
    <>
      <p className='font-inter text-2xl'>What did you listen to?</p>

      <SpeakerButton audio={rightAnswer.audio} />

      <div className={` font-inter  ${isAnswerd ? ((selectedButton === rightAnswer.text) ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold') : 'text-zinc-900'}`}>
        {isAnswerd ? ((selectedButton === rightAnswer.text) ? 'Right' : 'Wrong') : 'select the right answer'}
      </div>

      <div className='mb-7 grid grid-cols-1 sm:grid-cols-2'>
        {currentWords.map(word => (
          <QuestionButton
            audio={word.audio}
            setSelectedButton={setSelectedButton}
            isSelected={word.text === selectedButton}
            text={word.text}
            isAnswerd={isAnswerd}
            rightAnser={rightAnswer.text}
            key={word.text}
          />
        ))}
      </div>

      {keyboardStateInput === 'true' &&
        <input
          type="text"
          ref={inputRef}
          className="mb-7 outline-none border-b border-stone-400 capitalize"
          placeholder="Type here"
          onChange={(event) => {
            if (event.target.value.toLocaleLowerCase() === rightAnswer.text.toLocaleLowerCase()) {
              setSelectedButton(rightAnswer.text)
            }
          }}
        />
      }

      <button
        ref={nextQuestionButtonRef}
        className={`${!isAnswerd ? 'opacity-50' : 'opacity-100'} bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900`}
        onClick={() => checkAnswer()}
      >
        next question
      </button>
    </>
  )
}
