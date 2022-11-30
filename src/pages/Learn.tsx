import QuestionButton from '../components/learn/QuestionButton'
import SelectCategory from '../components/learn/SelectCategory'
import SpeakerSvg from '../components/learn/SpeakerSvg'


export default function Learn() {
  return (
    <div className="container mx-auto max-w-4xl flex flex-col items-center w-full mt-6 px-3 rounded-md h-5/6 ">
      <SelectCategory />
      <p className='font-inter text-2xl'>What did you listen to?</p>

      <div
        onClick={() => console.log('ok')}
        className='cursor-pointer border-2 border-black w-40 h-40 flex items-center justify-center rounded-3xl shadow-[5px_5px_0px_rgb(0,0,0)] active:shadow-[1px_1px_0px_rgb(0,0,0)] text-black bg-white ease-out active:translate-y-1 my-10 transition-all hover:bg-stone-300/80'>

        <SpeakerSvg />

      </div>

      <div className='mb-7 grid grid-cols-1 sm:grid-cols-2'>
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
      </div>

      <button className='border-2 border-blue-600 text-blue-600 font-inter font-semibold  w-64 h-11 rounded-lg hover:bg-blue-600 hover:text-white'>
        check the answer
      </button>

    </div>
  )


}
