import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

const App = () => {
  return (
    <div className="w-[550px] bg-white mt-12 rounded-lg font-poppins">
      <Navbar />
      <Hero />
      <Card 
        img="zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
