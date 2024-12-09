import './App.css'
import Headers from '../src/components/Header/index.jsx'
import { Hero } from './components/Hero/index.jsx'
import { Ingrediants } from './components/Ingrediants/index.jsx'
import { OurBlog } from './components/OurBlog/index.jsx'
import { Footer } from './components/Footer/index.jsx'

function App() {

  return (
    <div className='Main-Div'>
      <Headers/>
      <Hero/>
      <Ingrediants/>
      <OurBlog/>
      <Footer/>
    </div>
  )
}

export default App
