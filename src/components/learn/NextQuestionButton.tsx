import { forwardRef } from "react";
interface Props {
  isAnswerd: Boolean,
  checkAnswer: () => void
}


const NextQuestionButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isAnswerd, checkAnswer } = props

  return (
    <button
      ref={ref}
      className={`${!isAnswerd ? 'opacity-50' : 'opacity-100'} bg-black text-white font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-zinc-900`}
      onClick={() => checkAnswer()}
    >
      next question
    </button>
  )
})

export default NextQuestionButton