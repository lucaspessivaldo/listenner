import { SpeakerLoudIcon } from "@radix-ui/react-icons"
interface Props {
  setSelectedButton: (selectedButton: string) => void
  text: string
  rightAnser: string
  isAnswerd: Boolean
  isSelected: boolean
  audio: HTMLAudioElement
  phonetic?: string
}

const buttonStyle = "flex justify-between items-center p-6 border-[1px] font-inter font-semibold sm:w-48 w-64 h-11 mx-2 my-2 transition-shadow rounded-lg"
const selectedAndRight = 'border-green-600 shadow-[0px_2px_0px_rgb(18,145,65)]'
const selectedAndWrong = 'border-red-600 shadow-[0px_2px_0px_rgb(220,38,38)]'
const unselected = 'border-zinc-600 text-zinc-600'

export default function QuestionButton({ text, setSelectedButton, isSelected, isAnswerd, rightAnser, audio, phonetic }: Props) {
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

      <SpeakerLoudIcon className={`w-5 h-5 text-black transition-opacity duration-300 ease-linear ${isAnswerd ? 'opacity-100' : 'opacity-0'}`} />

    </button>
  )
}
