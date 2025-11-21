
import Carousels from '../components/HomePage/Carousels'
import Service from '../components/HomePage/Service'
import Join from '../components/HomePage/Join'
import Categories from '../components/Categories'
import Heros from '../components/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'
import Hero from '../components/Hero'



const Home = () => {
  return (
    <div>
        <Hero />
        <Heros />

        <TagToyPresentation />
        {/* <Carousels/> */}
        
        <Categories />
        <Service />
         <Join />
    </div>
  )
}

export default Home