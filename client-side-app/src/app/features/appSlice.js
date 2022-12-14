import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
    score: 0,
    rank: 0,
    disabled: false
};
export const appSlice = createSlice( {
    name: 'counter',
    initialState,
    reducers: {
        increaseCounter: ( state ) => {
            if ( state.count < 10 ) {
                state.count += 1;
            }
        },
        increseScore: ( state ) => {
            if ( state.score < 10 ) {
                state.score += 1;
            }
        },
        setRank: ( state, action ) => {
            state.rank = action.payload;
        },
        restApp: ( state ) => {
            state.score = 0;
            state.count = 0;
        },
        disabledButtons: ( state, action ) => {
            state.disabled = action.payload;
        }

    }
} )
export const { increaseCounter, increseScore, setRank, restApp, disabledButtons } = appSlice.actions;