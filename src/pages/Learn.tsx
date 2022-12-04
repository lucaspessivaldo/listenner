import QuestionButton from '../components/learn/QuestionButton'
import SelectCategory from '../components/learn/SelectCategory'
import SpeakerSvg from '../components/learn/SpeakerSvg'

import { AudioArray } from '../common/types'

import alphabetAudiosArray from '../assets/audios/alphabet/alphabetAudios'

import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'

export default function Learn() {
  const selectedTopic = useSelector((state: RootState) => state.selectedTopic.value)
  const dispatch = useDispatch()

  function getRandomIntInclusive(max: number) {
    const min = 0
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function getRandomPosition(array: AudioArray[]) {
    const randomNumber = getRandomIntInclusive(array.length - 1)
    const randomWord = array[randomNumber]
    return randomWord
  }

  return (
    <div className="container mx-auto max-w-4xl flex flex-col items-center w-full mt-6 px-3 rounded-md h-5/6 ">
      <SelectCategory />
      <p className='font-inter text-2xl'>What did you listen to?</p>

      <div
        onClick={() => {
          const currentAudio = new Audio(alphabetAudiosArray[2].audio)
          currentAudio.pause()
          currentAudio.play()
        }}
        className='cursor-pointer border-2 border-black w-40 h-40 flex items-center justify-center rounded-3xl 
        shadow-[5px_5px_0px_rgb(0,0,0)] active:shadow-[1px_1px_0px_rgb(0,0,0)] text-black bg-white 
        ease-out active:translate-y-1 my-10 transition-all hover:bg-stone-300/80'
      >
        <SpeakerSvg />
      </div>

      <div className='mb-7 grid grid-cols-1 sm:grid-cols-2'>
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
      </div>

      <button className='bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900'>
        check the answer
      </button>

    </div>
  )
}
