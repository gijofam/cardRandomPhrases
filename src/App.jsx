import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

function App() {

  // obtener un numero aleatorio 
  const numberRandom = arrQuotes =>{
    const number = Math.floor(Math.random()* quotes.length)
    const randomElement = arrQuotes[number];
    return randomElement
  }
  
  //obtener un color aleatorio
  const getRandomColor = ()=>{
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor
  }
  const color = getRandomColor();
   

  const objQuote = numberRandom(quotes)
  const [randomQuote, setRandomQuote] = useState(objQuote)

  const chamgeRandomQuote = ()=>{
    setRandomQuote(numberRandom(quotes))
  }


  return (
    <div className="App" style={{backgroundColor:`${color}`}} >
      <QuoteBox randomQuote={randomQuote} chamgeRandomQuote={chamgeRandomQuote} color ={color}  />
     {/* <article className='card ' style={{color:`${randomColor}`}}>
      <div className='card-container'>
        <i className='bx bxs-quote-left card-container__icon'></i>
        <p className='card-container__info'>{randomQuote.quote}</p>
      </div>
      <p className='card__info'>{randomQuote.author}</p>
      <i onClick={chamgeRandomQuote} className='bx bxs-skip-next-circle card__icon'> </i>
     </article> */}
    </div>
  )
}

export default App
