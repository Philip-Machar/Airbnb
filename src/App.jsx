import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

const App = () => {
  const cards = data.map(cardData => {
    return (
      <Card
        key={cardData.key}
        {...cardData}
      />
    )
  })
  return (
    <div className="w-[550px] bg-white mt-12 rounded-lg font-poppins pb-8">
      <Navbar />
      <Hero />
      <div className="flex gap-5 mx-8 overflow-x-auto">
        {cards}
      </div>
    </div>
  )
}

export default App
