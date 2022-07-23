import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchCards = createAsyncThunk('/market/fetchCards', async () => {
    const { data } = await axios.get('/market');
    return data;
})

export const fetchAddCards = createAsyncThunk('/market/fetchAddCards', async (params) => {
    const { data } = await axios.post('/market', params);
    return data;
})


const initialState = {
    cards: {
        items: [],
        status: 'loading'
    },
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchCards.pending] : (state) => {
            state.cards.status = 'loading'
        },

        [fetchCards.fulfilled] : (state, action) => {
            state.cards.items = action.payload
            state.cards.status = 'loaded'
        },

        [fetchCards.rejected] : (state) => {
            state.cards.items = []
            state.cards.status = 'error'
        },

        [fetchAddCards.pending] : (state) => {
            state.cards.status = 'loading'
        },

        [fetchAddCards.fulfilled] : (state, action) => {
            state.cards.items = action.payload
            state.cards.status = 'loaded'
        },

        [fetchAddCards.rejected] : (state) => {
            state.cards.items = []
            state.cards.status = 'error'
        },
    },
})

export const cardsReducer = cardsSlice.reducer;