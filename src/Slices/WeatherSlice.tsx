import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import { Appthunk } from '../Modules/store/store';

const slice = createSlice({
    name: 'Weather App',
    initialState:{
        response: {},
        loading: true
    },
    reducers:{
        reset: (state) => {
            state.response = {}
            state.loading = true
        },
        getResponse: (state, { payload } : PayloadAction<any>) => {
            state.response = payload;
            state.loading = false;
        },
    }
});

const { getResponse } = slice.actions;

export const getWeather = (location: any): Appthunk => async dispatch => {
    
}