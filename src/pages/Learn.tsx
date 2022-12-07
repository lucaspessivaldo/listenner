import QuestionButton from '../components/learn/QuestionButton'
import SelectCategory from '../components/learn/SelectCategory'
import SpeakerSvg from '../components/learn/SpeakerSvg'
import alphabetAudiosArray from '../assets/audios/alphabet/alphabetAudios'
import { AudioArray } from '../common/types'

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
  const [selectedButton, setSelectedButton] = useState<String>('')

  useEffect(() => {
    let firstWord = getRandomPosition(alphabetAudiosArray)
    let secondWord = getRandomPosition(alphabetAudiosArray)

    while (secondWord.text === firstWord.text) {
      secondWord = getRandomPosition(alphabetAudiosArray)
    }

    const array = [firstWord, secondWord]
    array.sort(() => Math.random() - 0.5)

    setRightAnswer(firstWord)
    setCurrentWords(array)
  }, [])

  return (
    <div className="container mx-auto max-w-4xl flex flex-col items-center w-full mt-6 px-3 rounded-md h-5/6 ">
      <SelectCategory />
      <p className='font-inter text-2xl'>What did you listen to?</p>

      <div
        onClick={() => {
          rightAnswer.audio.pause()
          rightAnswer.audio.play()

        }}
        className='cursor-pointer border-2 border-black w-40 h-40 flex items-center justify-center rounded-3xl 
        shadow-[5px_5px_0px_rgb(0,0,0)] active:shadow-[1px_1px_0px_rgb(0,0,0)] text-black
        ease-out active:translate-y-1 my-10 transition-all'
      >
        <SpeakerSvg />
      </div>

      <div className='text-zinc-600 font-inter'>
        select the right answer
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

      <button className='bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900'>
        check the answer
      </button>
    </div>
  )
}
