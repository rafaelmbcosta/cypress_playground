import { createSlice } from '@reduxjs/toolkit'

const delayedButtonSlice = createSlice({
  name: 'delayedButton',
  initialState: { show: false, loading: false },
  reducers: {
    show(state) {
      state.loading = true
      state.show = true
      state.loading = false
    }
  }
})

export const { show } = delayedButtonSlice.actions

export const selectButtonState =  state => state.delayedButton

export default delayedButtonSlice.reducer