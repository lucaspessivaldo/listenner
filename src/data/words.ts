import numbers from "../assets/audios/words/numbers/numbers";
import alphabet from "../assets/audios/words/alphabet/alphabet"
import { WordsArray } from "../common/types";

interface Words {
  alphabet: WordsArray[];
  numbers: WordsArray[];
  [key: string]: any;
}

const words: Words = { alphabet, numbers }

export { words }