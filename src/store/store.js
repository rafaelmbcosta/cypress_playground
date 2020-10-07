import { configureStore } from '@reduxjs/toolkit';
import delayedButtonSlice from '../components/FormComponents/Buttons/delayedButtonSlice'
import timeButtonSlice from '../components/FormComponents/Buttons/timeButtonSlice'

const store = configureStore({
  reducer: {
    delayedButton: delayedButtonSlice,
    timeButton: timeButtonSlice
  }
})

export default store;