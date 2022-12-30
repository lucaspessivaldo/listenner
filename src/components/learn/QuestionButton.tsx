interface Props {
  text: string
  audio: HTMLAudioElement
  setSelectedButton: (selectedButton: string) => void
  isAnswerd: Boolean
  isSelected: boolean
}

const buttonStyle = "border-[1px] font-inter font-semibold sm:w-48 w-64 h-11 mx-2 my-2 transition-shadow rounded-lg"

export default function QuestionButton({ text, audio, setSelectedButton, isSelected, isAnswerd }: Props) {
  return (
    <button
      className={`${buttonStyle} ${isSelected ? 'border-black shadow-[3px_3px_0px_rgb(0,0,0)]' : 'border-zinc-600 text-zinc-600'}`}
      onClick={() => {
        if (isAnswerd) return
        setSelectedButton(text)
      }}
    >
      {text}
    </button>
  )
}
