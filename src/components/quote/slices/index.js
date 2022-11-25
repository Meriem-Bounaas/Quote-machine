import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { BASE_URL } from '../../../config'

export const QuoteSlice = createSlice({
    name: "quote",
    initialState: {
        value: {},
        status: '',
        error: null
    },
    reducers:{

    },
    extraReducers(builder) {
        builder
          .addCase(fetchQuote.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchQuote.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.value = action.payload
          })
          .addCase(fetchQuote.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }

})

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const response =  await fetch(BASE_URL)
    return response.json() 
  })

export default QuoteSlice.reducer