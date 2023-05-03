import { createSlice , PayloadAction} from "@reduxjs/toolkit";

type CounterState = {
    value:number,
}

const initialState = {
value:0,
} as CounterState;

export const counter = createSlice({
name: "counter",
initialState,
reducers : {
    reset: () => initialState,
    increment: (state) => {
        state.value += 1;
    },
    decrement : (state) => {
        state.value -= 1;
    },
    IncrementByNumber : (state , action:PayloadAction<number>) =>{
        state.value += action.payload ;
    },
    DecrementByNumber : (state,action:PayloadAction<number>) =>{
        state.value -= action.payload;
    }
}
});

export const {
reset,increment,decrement,DecrementByNumber,IncrementByNumber
} = counter.actions

export default counter.reducer;