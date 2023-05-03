import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data.jsx'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
function App() {
  const card = Data.map((item) => {
    return <Card 
      key={item.id}
      item={item}
      // {...item}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
    />
  })
  return (
    <>
      <Navbar /> 
      <Hero />
      <section className='card-list'>
        {card}
      </section>
    </>
  )
}

// {
//   id: 1,
//   title: "Life Lessons with Katie Zaferes",
//   description:
//     'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
//   price: 136,
//   coverImg: "image1.png",
//   stats: {
//     rating: 5.0,
//     reviewCount: 6,
//   },
//   location: "Online",
//   openSpots: 0,
// }

export default App
