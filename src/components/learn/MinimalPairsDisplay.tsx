import { useEffect, useState } from "react";
import { WordsArray } from "../../common/types";
import MinimalPairs01 from "../../assets/audios/minimalPairs/01/MinimalPairs01"
import SpeakerButton from "./SpeakerButton";
import ButtonMinimalPairs from "./ButtonMinimalPairs";
import rightsound from '../../assets/audios/right-sound.wav'
import wrongsound from '../../assets/audios/error-sound.wav'

const right = new Audio(rightsound)
const wrong = new Audio(wrongsound)

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
  const [currentWords, setCurrentWords] = useState<WordsArray[]>(getRandomPosition(MinimalPairs01));
  const [rightAnswer, setRightAnswer] = useState<WordsArray>(currentWords[0]);
  const [isAnswerd, setIsAnswerd] = useState<Boolean>(false)
  const [selectedButton, setSelectedButton] = useState<String>('')

  const restartQuestion = () => {
    const words = getRandomPosition(MinimalPairs01)
    const rightWord = [...words].sort(() => Math.random() - 0.5)[0]

    setIsAnswerd(false)
    setSelectedButton('')
    rightWord.audio.play()

    setRightAnswer(rightWord)
    setCurrentWords(words)
  }

  const checkAnswer = () => {
    if (isAnswerd) {
      setIsAnswerd(false)
      setSelectedButton('')
      restartQuestion()
      return
    }
    const isRightAnswer = selectedButton === rightAnswer.text

    if (isRightAnswer) right.play()
    else wrong.play()

    setIsAnswerd(true)
    console.log(isRightAnswer)
  }

  useEffect(() => {
    restartQuestion()
  }, [])

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
          <ButtonMinimalPairs
            text={word.text}
            phonetic={word.phonetic}
            isAnswerd={isAnswerd}
            isSelected={word.text === selectedButton}
            rightAnser={rightAnswer.text}
            setSelectedButton={setSelectedButton}
            key={word.text}
          />
        ))}
      </div>

      <button
        className={`${!isAnswerd ? 'opacity-50' : 'opacity-100'} bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900`}
        disabled={!isAnswerd}
        onClick={() => checkAnswer()}
      >
        next question
      </button>
    </>
  )
}
