import React from 'react'

const QuoteBox = ({randomQuote,chamgeRandomQuote,color}) => {
  return (
    <div>
      <article className='card ' style={{color:`${color}`}}>
      <div className='card-container'>
        <i className='bx bxs-quote-left card-container__icon'></i>
        <p className='card-container__info'>{randomQuote.quote}</p>
      </div>
      <p className='card__info'>{randomQuote.author}</p>
      <i onClick={chamgeRandomQuote} className='bx bxs-skip-next-circle card__icon'> </i>
     </article>
    </div>
  )
}

export default QuoteBox