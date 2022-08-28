import { useSelector, useDispatch } from 'react-redux'
import {fetchQuote} from './slices'
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';
import { useEffect } from 'react';
import Loading from '../loading';

const Quote = () =>{
    const quote = useSelector(state => state.quote.value)
    const quoteStatus = useSelector(state => state.quote.status)
    const quoteError = useSelector(state => state.quote.error)

    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(fetchQuote()) 
    },[dispatch])

    if(quoteError)
        return <h1>{quoteError}</h1>

    return(
        <>
            <div id='quote-box'>
                {(quoteStatus === "loading")&&
                     <Loading/>
                 }
                {(quoteStatus === "succeeded")&&
                    <>
                        <div id="text">
                            <FaQuoteLeft/> 
                            <span>{"   "}{quote.content}</span>
                        </div>
                        <div id="author">-{quote.author}</div>
                    </>
                }
            
                <div id="button-box">
                    <button id="new-quote" 
                        onClick={() => dispatch(fetchQuote())}  
                    >
                        New Quote
                    </button>
                    <a id="tweet-quote" 
                        href={'https://twitter.com/intent/tweet?text=' +
                        encodeURIComponent('"' + quote.content + '" ' + quote.author)}
                        target="_blank" rel="noreferrer">
                        <FaTwitter/>
                    </a>
                </div>
            </div>
            <div className='footer'>
             by Meriem Bounaas
            </div>
        </>
    )
}

export default Quote
