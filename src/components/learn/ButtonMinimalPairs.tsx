interface Props {
  text: string
  phonetic: string
  audio: HTMLAudioElement
  rightAnser: string
  isAnswerd: Boolean
  isSelected: boolean
  setSelectedButton: (selectedButton: string) => void
}

const buttonStyle = "flex justify-between items-center p-6 border-[1px] font-inter font-semibold sm:w-48 w-64 h-11 mx-2 my-2 transition-shadow rounded-lg"
const selectedAndRight = 'border-green-600 shadow-[0px_2px_0px_rgb(18,145,65)]'
const selectedAndWrong = 'border-red-600 shadow-[0px_2px_0px_rgb(220,38,38)]'
const unselected = 'border-zinc-600 text-zinc-600'

export default function ButtonMinimalPairs({ text, phonetic, audio, rightAnser, isAnswerd, isSelected, setSelectedButton }: Props) {
  return (
    <button
      className={`
    ${buttonStyle} 
    ${!isSelected
          ? unselected
          : (text === rightAnser && isSelected)
            ? selectedAndRight
            : selectedAndWrong
        }`
      }
      onClick={() => {
        if (isAnswerd) {
          audio.play()
          return
        }
        setSelectedButton(text)
      }}
    >
      <div>
        <div>{text}</div>
        <div className="text-sm text-gray-500">{phonetic}</div>
      </div>

      {isAnswerd &&
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      }

    </button>
  )
}