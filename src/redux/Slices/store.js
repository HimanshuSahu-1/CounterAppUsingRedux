import { configureStore } from '@reduxjs/toolkit'

import CounterSlice from './CounterSlice'

export const store = configureStore({
  reducer: {
    //  name : name of slice inside reducer
    Himanshu : CounterSlice

  },
});

// configStore centralised store hai 
// aur ye multiple slices se bnta hai 
// yha pe reducer ke ander ek counterSlice hai