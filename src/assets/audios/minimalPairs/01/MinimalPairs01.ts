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

import did from './did.mp3'
import deed from './deed.mp3'

import fill from './fill.mp3'
import feel from './feel.mp3'

import fit from './fit.mp3'
import feet from './feet.mp3'

import grin from './grin.mp3'
import green from './green.mp3'

import hit from './hit.mp3'
import heat from './heat.mp3'

import is from './is.mp3'
import ease from './ease.mp3'

import mitt from './mitt.mp3'
import meet from './meet.mp3'

import slip from './slip.mp3'
import sleep from './sleep.mp3'

import still from './still.mp3'
import steal from './steal.mp3'

import bit from './bit.mp3'
import beat from './beat.mp3'

import bitch from './bitch.mp3'
import beach from './beach.mp3'

import itch from './itch.mp3'
import each from './each.mp3'

const MinimalPairs01: WordsArray[][] = [
  [
    { text: 'Bean', audio: new Audio(bean), phonetic: '/bin/' },
    { text: 'Bin', audio: new Audio(bin), phonetic: '/bɪn/' }
  ],

  [
    { text: 'Cheap', audio: new Audio(cheap), phonetic: '/ʧip/' },
    { text: 'Chip', audio: new Audio(chip), phonetic: '/ʧɪp/' }
  ],

  [
    { text: 'Eat', audio: new Audio(eat), phonetic: '/it/' },
    { text: 'It', audio: new Audio(it), phonetic: '/ɪt/' }
  ],


  [
    { text: "He's", audio: new Audio(hes), phonetic: '/hiz/' },
    { text: 'His', audio: new Audio(his), phonetic: '/hɪz/' }
  ],

  [
    { text: 'Seat', audio: new Audio(seat), phonetic: '/sit/' },
    { text: 'Sit', audio: new Audio(sit), phonetic: '/sɪt/' }
  ],

  [
    { text: 'Did', audio: new Audio(did), phonetic: '/dɪd/' },
    { text: 'Deed', audio: new Audio(deed), phonetic: '/did/' }
  ],

  [
    { text: 'Fill', audio: new Audio(fill), phonetic: '/fɪl/' },
    { text: 'Feel', audio: new Audio(feel), phonetic: '/fil/' }
  ],

  [
    { text: 'Fit', audio: new Audio(fit), phonetic: '/fɪt/' },
    { text: 'Feet', audio: new Audio(feet), phonetic: '/fit/' }
  ],

  [
    { text: 'Grin', audio: new Audio(grin), phonetic: '/ɡrɪn/' },
    { text: 'Green', audio: new Audio(green), phonetic: '/ɡrin/' }
  ],

  [
    { text: 'Hit', audio: new Audio(hit), phonetic: '/hɪt/' },
    { text: 'Heat', audio: new Audio(heat), phonetic: '/hit/' }
  ],

  [
    { text: 'Is', audio: new Audio(is), phonetic: '/ɪz/' },
    { text: 'Ease', audio: new Audio(ease), phonetic: '/iz/' }
  ],

  [
    { text: 'Mitt', audio: new Audio(mitt), phonetic: '/mɪt/' },
    { text: 'Meet', audio: new Audio(meet), phonetic: '/mit/' }
  ],

  [
    { text: 'Slip', audio: new Audio(slip), phonetic: '/slɪp/' },
    { text: 'Sleep', audio: new Audio(sleep), phonetic: '/slip/' }
  ],

  [
    { text: 'Still', audio: new Audio(still), phonetic: '/stɪl/' },
    { text: 'Steal', audio: new Audio(steal), phonetic: '/stil/' }
  ],

  [
    { text: 'Bit', audio: new Audio(bit), phonetic: '/bɪt/' },
    { text: 'Beat', audio: new Audio(beat), phonetic: '/bit/' }
  ],

  [
    { text: 'Bitch', audio: new Audio(bitch), phonetic: '/bɪʧ/' },
    { text: 'Beach', audio: new Audio(beach), phonetic: '/biʧ/' }
  ],

  [
    { text: 'Itch', audio: new Audio(itch), phonetic: '/ɪʧ/' },
    { text: 'Each', audio: new Audio(each), phonetic: '/iʧ/' }
  ],

]

export default MinimalPairs01