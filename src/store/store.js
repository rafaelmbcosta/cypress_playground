import { configureStore } from '@reduxjs/toolkit';
import delayerButtonSlice from '../components/FormComponents/delayerButtonSlice'

const store = configureStore({
  reducer: {
    delayedButton: delayerButtonSlice
  }
})

export default store;