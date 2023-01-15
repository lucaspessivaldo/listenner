import { useEffect, useState, useRef } from "react";
import { WordsArray } from "../../common/types";
import MinimalPairs01 from "../../assets/audios/minimalPairs/01/MinimalPairs01"
import MinimalPairs02 from "../../assets/audios/minimalPairs/02/MinimalPairs02";
import SpeakerButton from "./SpeakerButton";
import ButtonMinimalPairs from "./ButtonMinimalPairs";
import rightsound from '../../assets/audios/right-sound.wav'
import wrongsound from '../../assets/audios/error-sound.wav'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

const right = new Audio(rightsound)
const wrong = new Audio(wrongsound)
const MinimalPairWords = [MinimalPairs01, MinimalPairs02]
const MinimalPairCategory = ['/ɪ/ and /i:/', '/æ/ and /e/']

function getRandomIntInclusive(max: number) {
  const min = 0
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPosition(array: WordsArray[][]) {
  const randomNumber = getRandomIntInclusive(array.length - 1)
  const randomWord = array[randomNumber]
  return randomWord
}

export default function MinimalPairsDisplay() {
  const [minimalPairSelected, setMinimalPairSelected] = useState(0);
  const [currentWords, setCurrentWords] = useState<WordsArray[]>(getRandomPosition(MinimalPairWords[minimalPairSelected]));
  const [rightAnswer, setRightAnswer] = useState<WordsArray>(currentWords[0]);
  const [isAnswerd, setIsAnswerd] = useState<Boolean>(false)
  const [selectedButton, setSelectedButton] = useState<String>('')
  const keyboardStateInput = useSelector((state: RootState) => state.selectedTopic.keyboardInput)

  const nextQuestionButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const restartQuestion = () => {
    const words = getRandomPosition(MinimalPairWords[minimalPairSelected])
    const rightWord = [...words].sort(() => Math.random() - 0.5)[0]

    setIsAnswerd(false)
    setSelectedButton('')
    rightWord.audio.play()

    if (inputRef.current != null) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }

    setRightAnswer(rightWord)
    setCurrentWords(words)
  }

  const checkAnswer = () => {
    if (selectedButton === '') return
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
  }, [minimalPairSelected])

  useEffect(() => {
    if (selectedButton === '') return
    checkAnswer()
  }, [selectedButton])


  return (
    <>

      <div className='w-full max-w-[784px] h-11 border-2 border-black rounded-md mb-5'>
        <DropdownMenu.Root >

          <DropdownMenu.Trigger asChild>
            <div className="cursor-pointer text-black  px-5 flex items-center justify-between w-full h-full font-inter font-semibold">
              {MinimalPairCategory[minimalPairSelected]}
              <ChevronDownIcon />
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>

            <DropdownMenu.Content sideOffset={5} className='bg-white py-1 w-screen max-w-[800px] px-2 rounded-lg'>

              <DropdownMenu.Item
                onClick={() => setMinimalPairSelected(0)}
                className="rounded-md p-1 border-2 border-black mb-1 font-inter font-semibold cursor-pointer text-base text-zinc-900 focus:bg-stone-300/80 focus:outline-none"
              >
                /ɪ/ and /i:/
              </DropdownMenu.Item>

              <DropdownMenu.Item
                onClick={() => setMinimalPairSelected(1)}
                className="rounded-md p-1 border-2 border-black mb-1 font-inter font-semibold cursor-pointer text-base text-zinc-900 focus:bg-stone-300/80 focus:outline-none"
              >
                /æ/ and /e/
              </DropdownMenu.Item>

              <DropdownMenu.Arrow className="DropdownMenuArrow" />
            </DropdownMenu.Content>

          </DropdownMenu.Portal>

        </DropdownMenu.Root>

      </div>

      <p className='font-inter text-2xl'>What did you listen to?</p>

      <SpeakerButton audio={rightAnswer.audio} />

      <div className={` font-inter  ${isAnswerd ? ((selectedButton === rightAnswer.text) ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold') : 'text-zinc-900'}`}>
        {isAnswerd ? ((selectedButton === rightAnswer.text) ? 'Right' : 'Wrong') : 'select the right answer'}
      </div>

      <div className='mb-7 grid grid-cols-1 sm:grid-cols-2'>
        {currentWords.map(word => (
          <ButtonMinimalPairs
            text={word.text}
            phonetic={word.phonetic}
            audio={word.audio}
            isAnswerd={isAnswerd}
            isSelected={word.text === selectedButton}
            rightAnser={rightAnswer.text}
            setSelectedButton={setSelectedButton}
            key={word.text}
          />
        ))}
      </div>

      {keyboardStateInput === 'true' &&
        <input
          type="text"
          ref={inputRef}
          className="mb-7 outline-none border-b-2 border-stone-400 capitalize"
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
