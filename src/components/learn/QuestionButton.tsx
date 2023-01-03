interface Props {
  text: string
  rightAnser: string
  audio?: HTMLAudioElement
  setSelectedButton: (selectedButton: string) => void
  isAnswerd: Boolean
  isSelected: boolean
}

const buttonStyle = "border-[1px] font-inter font-semibold sm:w-48 w-64 h-11 mx-2 my-2 transition-shadow rounded-lg"
const selectedAndRight = 'border-green-600 shadow-[0px_2px_0px_rgb(18,145,65)]'
const selectedAndWrong = 'border-red-600 shadow-[0px_2px_0px_rgb(220,38,38)]'
const unselected = 'border-zinc-600 text-zinc-600'

export default function QuestionButton({ text, setSelectedButton, isSelected, isAnswerd, rightAnser }: Props) {
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
      {text}
    </button>
  )
}


// const Button = ({ selected, correct }) => {
//   const className = !selected
//     ? 'btn-normal'
//     : correct
//     ? 'btn-selected-correct'
//     : 'btn-selected-incorrect';

//   return <button className={className}>Button</button>;
// };
