import { SpeakerLoudIcon } from "@radix-ui/react-icons";

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

      className='cursor-pointer border-2 border-black w-40 h-40 flex items-center justify-center rounded-md 
        shadow-[5px_5px_0px_rgb(0,0,0)] active:shadow-[1px_1px_0px_rgb(0,0,0)] text-black
        ease-out active:translate-y-1 my-10 transition-all'
    >
      <SpeakerLoudIcon className="w-16 h-16" />
    </div>
  )
}
