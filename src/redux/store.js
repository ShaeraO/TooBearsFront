import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { cardsReducer } from './slices/cards'

const store = configureStore({
    reducer: {
        cards: cardsReducer,
        auth: authReducer
    },
})

export default store