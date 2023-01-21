import { useEffect, useState, useRef } from "react";
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

import { getRandomMinimalPairWords } from "../../common/getRandomWord";
import { WordsArray } from "../../common/types";

import QuestionButton from '../../components/learn/QuestionButton'
import SpeakerButton from "./SpeakerButton";
import KeyboardInput from "./KeyboardInput";

import { wrongSound, rightSound } from "../../data/sounds";
import { minimalPairWords } from "../../data/minimalPairsWords";
import SelectCategoryMiminalPairs from "./SelectCategoryMiminalPairs";


export default function MinimalPairsDisplay() {
  const [minimalPairSelected, setMinimalPairSelected] = useState(0);
  const [currentWords, setCurrentWords] = useState<WordsArray[]>(getRandomMinimalPairWords(minimalPairWords[minimalPairSelected]));
  const [rightAnswer, setRightAnswer] = useState<WordsArray>(currentWords[0]);
  const [isAnswerd, setIsAnswerd] = useState<Boolean>(false)

  const [selectedButton, setSelectedButton] = useState<String>('')
  const keyboardStateInput = useSelector((state: RootState) => state.selectedTopic.keyboardInput)

  const nextQuestionButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const restartQuestion = () => {
    const words = getRandomMinimalPairWords(minimalPairWords[minimalPairSelected])
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

    if (isRightAnswer) rightSound.play()
    else wrongSound.play()

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
      <SelectCategoryMiminalPairs minimalPairSelected={minimalPairSelected} setMinimalPairSelected={setMinimalPairSelected} />

      <p className='font-inter text-2xl'>What did you listen to?</p>

      <SpeakerButton audio={rightAnswer.audio} />

      <div className={` font-inter  ${isAnswerd ? ((selectedButton === rightAnswer.text) ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold') : 'text-zinc-900'}`}>
        {isAnswerd ? ((selectedButton === rightAnswer.text) ? 'Right' : 'Wrong') : 'select the right answer'}
      </div>

      <div className='mb-7 grid grid-cols-1 sm:grid-cols-2'>
        {currentWords.map(word => (
          <QuestionButton
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

      {keyboardStateInput && <KeyboardInput ref={inputRef} rightAnswer={rightAnswer} setSelectedButton={setSelectedButton} />}

      <button
        ref={nextQuestionButtonRef}
        className={`${!isAnswerd ? 'opacity-50' : 'opacity-100'} bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900 flex justify-center items-center p-6`}
        onClick={() => checkAnswer()}
      >
        next question
      </button>
    </>
  )
}
