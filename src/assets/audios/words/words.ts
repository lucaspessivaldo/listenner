import numbers from "./numbers/numbers";
import alphabet from "./alphabet/alphabet";
import { WordsArray } from "../../../common/types";

interface Words {
  alphabet: WordsArray[];
  numbers: WordsArray[];
  [key: string]: any;
}

const words: Words = { alphabet, numbers }

export { words }
