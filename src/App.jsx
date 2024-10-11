import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

const App = () => {
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        title={card.title}
        descriptions={card.descriptions}
        price={card.price}
        coverImg={card.coverImg}
        stats={card.stats}
        location={card.location}
        openSpots={card.openSpots}
      />
    )
  })
  return (
    <div className="w-[550px] bg-white mt-12 rounded-lg font-poppins">
      <Navbar />
      <Hero />
      <div className="flex gap-5 mx-8 overflow-x-auto">
        {cards}
      </div>
    </div>
  )
}

export default App
