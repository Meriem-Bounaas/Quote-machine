import { configureStore } from '@reduxjs/toolkit'
import quoteReducer from '../components/quote/slices'

export default configureStore({
  reducer: {
    quote: quoteReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})