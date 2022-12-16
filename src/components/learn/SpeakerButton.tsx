interface Props {
  audio: HTMLAudioElement
}

export default function SpeakerButton({ audio }: Props) {
  return (
    <div
      onClick={() => {
        audio.pause()
        audio.play()
      }}

      className='cursor-pointer border-2 border-black w-40 h-40 flex items-center justify-center rounded-3xl 
        shadow-[5px_5px_0px_rgb(0,0,0)] active:shadow-[1px_1px_0px_rgb(0,0,0)] text-black
        ease-out active:translate-y-1 my-10 transition-all'
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    </div>
  )
}
