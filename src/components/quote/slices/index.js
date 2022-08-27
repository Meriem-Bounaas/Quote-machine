import { createSlice } from '@reduxjs/toolkit'
// import { useEffect } from 'react'

export const QuoteSlice = createSlice({
name: "quote",
initialState: {
    value: []
},
reducers:{
    randomQuote: async state =>{
        const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        const data = await response.json()
        state.value = data[0]
    }
}
})

export const {randomQuote} = QuoteSlice.actions
export default QuoteSlice.reducer