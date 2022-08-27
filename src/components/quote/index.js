// import { useSelector, useDispatch } from 'react-redux'
// import {randomQuote} from './slices'
import {useState} from 'react'

const Quote = () =>{
const [Quote, setQuote]=useState('')
// const quote = useSelector(state => state.quote.value)
// const dispatch = useDispatch()


    async function randomQuote(){
        const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        const data = await response.json()
        setQuote(data[0])
    }


    return(
        <>
            <div id='quote-box'>
                <div id="text">{Quote.quote}</div>
                <div id="author">-{Quote.author}</div>
                <div id="button-box">
                    <button id="new-quote" 
                        onClick={() => randomQuote()}
                    >
                        new quote
                    </button>
                    <a id="tweet-quote" href='www.twitter.com/intent/tweet' target="_blank"><i class="fa fa-twitter" /></a>
                </div>
            </div>
            <div className='footer'>
                 by: Bounaas meriem
            </div>
        </>

    )
}

export default Quote
