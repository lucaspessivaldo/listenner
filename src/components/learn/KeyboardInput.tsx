import { forwardRef } from 'react';
import { WordsArray } from "../../common/types";

interface Props {
  setSelectedButton: (rightAnser: string) => void;
  rightAnswer: WordsArray
}

const KeyboardInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { rightAnswer, setSelectedButton } = props;

  function isInputEqualRightAnswer(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.toLocaleLowerCase() === rightAnswer.text.toLocaleLowerCase()) {
      setSelectedButton(rightAnswer.text)
    }
  }

  return (
    <input
      type="text"
      ref={ref}
      className="mb-7 outline-none border-b border-stone-400 capitalize"
      placeholder="Type here"
      onChange={isInputEqualRightAnswer}
    />
  )
});

export default KeyboardInput;