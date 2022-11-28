import { HiSpeakerWave } from 'react-icons/hi2'
import QuestionButton from '../components/learn/QuestionButton'


export default function Learn() {
  return (
    <div className="container mx-auto max-w-4xl flex flex-col items-center w-full mt-6 px-3 rounded-md h-5/6 ">
      <p className='font-inter font-semibold text-2xl'>chose the right answer.</p>
      <div className='cursor-pointer border-2 border-black w-40 h-40 flex items-center justify-center rounded-3xl shadow-[5px_5px_0px_rgb(0,0,0)] hover:shadow-[1px_1px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 my-10 transition-all'>
        <HiSpeakerWave className='text-9xl p-2' />
      </div>
      <div>
        <QuestionButton />
        <QuestionButton />
      </div>
    </div>
  )


}
