import { createSlice } from '@reduxjs/toolkit'

const delayedButtonSlice = createSlice({
  name: 'delayedButton',
  initialState: { show: false, loading: false },
  reducers: {
    show(state, data) {
      state.show = data.payload;
    },
    loading(state, data) {
      console.log('entrou loading')
      state.loading = data.payload
    }
  }
})

export const { show, loading } = delayedButtonSlice.actions

export const setButtonStateAsync = value => dispatch => {
  dispatch(loading(true));
  setTimeout(() => {
    dispatch(show(value))
    dispatch(loading(false))
  }, 4000);
}

export const selectButtonState =  state => state.delayedButton

export default delayedButtonSlice.reducer