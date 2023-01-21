import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface selectedTopicsState {
  value: string,
  keyboardInput: boolean;
}

const initialState: selectedTopicsState = {
  value: localStorage.getItem('category') || 'Minimal Pair',
  keyboardInput: localStorage.getItem('keyboardInput') === 'true' ? true : false
}

export const selectedTopic = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedTopic: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setKeyboardInput: (state, action: PayloadAction<boolean>) => {
      state.keyboardInput = action.payload
    }
  },
})

export const { setSelectedTopic, setKeyboardInput } = selectedTopic.actions

export default selectedTopic.reducer