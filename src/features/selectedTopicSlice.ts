import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface selectedTopicsState {
  value: string
}

const initialState: selectedTopicsState = {
  value: localStorage.getItem('category') || 'Minimal Pair',
}

export const selectedTopic = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedTopic: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelectedTopic } = selectedTopic.actions

export default selectedTopic.reducer