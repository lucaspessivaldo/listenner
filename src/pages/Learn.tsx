import QuestionButton from '../components/learn/QuestionButton'
import SelectCategory from '../components/learn/SelectCategory'
import alphabetAudiosArray from '../assets/audios/alphabet/alphabetAudios'
import { AudioArray } from '../common/types'
import SpeakerButton from '../components/learn/SpeakerButton'

import { useEffect, useState } from 'react'


function getRandomIntInclusive(max: number) {
  const min = 0
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPosition(array: AudioArray[]) {
  const randomNumber = getRandomIntInclusive(array.length - 1)
  const randomWord = array[randomNumber]
  return randomWord
}

export default function Learn() {
  const [currentWords, setCurrentWords] = useState<AudioArray[]>([alphabetAudiosArray[0]])
  const [rightAnswer, setRightAnswer] = useState<AudioArray>(alphabetAudiosArray[0])
  const [isAnswerd, setIsAnswerd] = useState<Boolean>(false)
  const [selectedButton, setSelectedButton] = useState<String>('')

  const restartQuestion = () => {
    let firstWord = getRandomPosition(alphabetAudiosArray)
    let secondWord = getRandomPosition(alphabetAudiosArray)
    firstWord.audio.play()

    while (secondWord.text === firstWord.text) {
      secondWord = getRandomPosition(alphabetAudiosArray)
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
    const isRightAnswer = selectedButton === rightAnswer.text
    setIsAnswerd(true)
    console.log(isRightAnswer)
  }

  useEffect(() => {
    restartQuestion()
  }, [])

  return (
    <div className="container mx-auto max-w-4xl flex flex-col items-center w-full mt-6 px-3 rounded-md h-5/6 ">
      <SelectCategory />
      <p className='font-inter text-2xl'>What did you listen to?</p>

      <SpeakerButton audio={rightAnswer.audio} />

      <div className={` font-inter  ${isAnswerd ? ((selectedButton === rightAnswer.text) ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold') : 'text-zinc-900'}`}>
        {isAnswerd ? ((selectedButton === rightAnswer.text) ? 'Right' : 'Wrong') : 'select the right answer'}
      </div>

      <div className='mb-7 grid grid-cols-1 sm:grid-cols-2'>
        {currentWords.map(word => (
          <QuestionButton
            setSelectedButton={setSelectedButton}
            isSelected={word.text === selectedButton}
            audio={word.audio}
            text={word.text}
            key={word.text}
          />
        ))}
      </div>

      <button
        className='bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900'
        onClick={() => checkAnswer()}
      >
        {isAnswerd ? 'next ->' : 'check the answer'}
      </button>
    </div>
  )
}
