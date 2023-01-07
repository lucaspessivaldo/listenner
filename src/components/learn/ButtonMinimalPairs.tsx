interface Props {
  text: string
  phonetic: string
  rightAnser: string
  isAnswerd: Boolean
  isSelected: boolean
  setSelectedButton: (selectedButton: string) => void
}

const buttonStyle = "border-[1px] font-inter font-semibold sm:w-48 w-64 h-11 mx-2 my-2 transition-shadow rounded-lg"
const selectedAndRight = 'border-green-600 shadow-[0px_2px_0px_rgb(18,145,65)]'
const selectedAndWrong = 'border-red-600 shadow-[0px_2px_0px_rgb(220,38,38)]'
const unselected = 'border-zinc-600 text-zinc-600'

export default function ButtonMinimalPairs({ text, phonetic, rightAnser, isAnswerd, isSelected, setSelectedButton }: Props) {
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
        if (isAnswerd) return
        setSelectedButton(text)
      }}
    >
      <div>{text}</div>
      <div className="text-sm text-gray-500">{phonetic}</div>
    </button>
  )
}