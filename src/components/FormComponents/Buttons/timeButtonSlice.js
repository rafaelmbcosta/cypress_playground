import { createSlice } from '@reduxjs/toolkit'
import { format } from '../../shared/time';

const timeButtonSlice = createSlice({
  name: 'timeButton',
  initialState: { time: '' },
  reducers: {
    setTime(state) {
      const date = new Date()
      state.time = format(date);
    }
  }
})

export const { setTime } = timeButtonSlice.actions

export const selectTime = state => state.timeButton.time;

export default timeButtonSlice.reducer