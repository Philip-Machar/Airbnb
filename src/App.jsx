import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

const App = () => {
  return (
    <div className="w-[550px] bg-white mt-12 rounded-lg font-poppins">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
