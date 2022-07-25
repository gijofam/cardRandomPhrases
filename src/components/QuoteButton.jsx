import React from 'react'

const QuoteButton = ({chamgeRandomQuote}) => {
  return (
    <div className='card__icon'>
      <i onClick={chamgeRandomQuote} className='bx bxs-skip-next-circle '> </i>
    </div>
  )
}

export default QuoteButton