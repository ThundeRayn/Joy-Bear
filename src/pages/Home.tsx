
import Carousels from '../components/HomePage/Carousels'
import Service from '../components/Service'
import Join from '../components/Join'
import Categories from '../components/Categories'
import Heros from '../components/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'



const Home = () => {
  return (
    <div>
        {/* <Hero /> */}
        <Heros />

        <TagToyPresentation />
        <Carousels/>
        
        <Categories />
        <Service />
        <Join />
    </div>
  )
}

export default Home