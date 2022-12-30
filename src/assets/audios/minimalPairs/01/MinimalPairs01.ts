import { WordsArray } from '../../../../common/types'

import bean from './bean.mp3'
import bin from './bin.mp3'
import cheap from './cheap.mp3'
import chip from './chip.mp3'
import eat from './eat.mp3'
import it from './it.mp3'
import hes from './hes.mp3'
import his from './his.mp3'
import seat from './seat.mp3'
import sit from './sit.mp3'

const MinimalPairs01: WordsArray[][] = [
  [
    { text: 'Bean', audio: new Audio(bean), phonetic: '' },
    { text: 'Bin', audio: new Audio(bin), phonetic: '' }
  ],

  [
    { text: 'Cheap', audio: new Audio(cheap), phonetic: '' },
    { text: 'Chip', audio: new Audio(chip), phonetic: '' }
  ],

  [
    { text: 'Eat', audio: new Audio(eat), phonetic: '' },
    { text: 'It', audio: new Audio(it), phonetic: '' }
  ],


  [
    { text: "He's", audio: new Audio(hes), phonetic: '' },
    { text: 'His', audio: new Audio(his), phonetic: '' }
  ],

  [
    { text: 'Seat', audio: new Audio(seat), phonetic: '' },
    { text: 'Sit', audio: new Audio(sit), phonetic: '' }
  ]
]

export default MinimalPairs01