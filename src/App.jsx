import './App.css'
import Headers from '../src/components/Header/index.jsx'
import { Hero } from './components/Hero/index.jsx'
import { Ingrediants } from './components/Ingrediants/index.jsx'
import { OurBlog } from './components/OurBlog/index.jsx'

function App() {

  return (
    <>
      <Headers/>
      <Hero/>
      <Ingrediants/>
      <OurBlog/>
    </>
  )
}

export default App
