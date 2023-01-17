
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setKeyboardInput } from '../features/selectedTopicSlice'
import {
  CheckIcon,
  MinusIcon,
  GearIcon
} from "@radix-ui/react-icons";

interface Props { }

export default function SettingButton(_props: Props) {
  const keyboardStateInput = useSelector((state: RootState) => state.selectedTopic.keyboardInput)
  const dispatch = useDispatch()

  const setKeyboard = (state: boolean) => {
    const keyboardState = state ? 'true' : 'false'
    dispatch(setKeyboardInput(keyboardState))
    localStorage.setItem('keyboardInput', keyboardState)
  }

  return (
    <div className="relative inline-block text-left">

      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button className={`px-2 outline-0`}>
            <GearIcon className="w-5 h-5" />
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={
              `border-2 border-black radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down
              w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56
              bg-white`
            }
          >

            <DropdownMenuPrimitive.CheckboxItem
              checked={keyboardStateInput === 'true' ? true : false}
              onCheckedChange={(state) => {
                if (state !== "indeterminate") {
                  setKeyboard(state)
                }
              }}
              className={
                `flex w-full hover:bg-slate-300 cursor-pointer items-center rounded-md px-2 py-2 text-xs outline-none`
              }
            >
              <span className="flex-grow text-black">
                Keyboard input
              </span>

              {keyboardStateInput === 'true' ? (
                <CheckIcon className="mr-2 h-3.5 w-3.5 text-green-600" />
              ) : (
                <MinusIcon className="mr-2 h-3.5 w-3.5 font-bold text-red-600" />
              )}
            </DropdownMenuPrimitive.CheckboxItem>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
}
