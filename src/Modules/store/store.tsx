import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer,  { RootState } from './reducer';

const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch

export type Appthunk = ThunkAction<void, RootState, null, Action<string>>

export default store