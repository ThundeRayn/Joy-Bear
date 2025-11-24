
//import Carousels from '../components/HomePage/Carousels'
//import Service from '../components/HomePage/Service'
import Join from '../components/HomePage/Join'
//import Categories from '../components/Categories'
import Heros from '../components/HomePage/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'
import Hero from '../components/HomePage/Hero'
import TagToys from '../components/HomePage/TagToys'
import Img from '../components/Img'



const Home = () => {
  return (
    <div>
        <Hero />
        <Heros />

        <TagToyPresentation />
        {/* <Carousels/> */}
        <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/>
        {/* <Categories /> */}

        <Img />
        {/* <Service /> */}
         <Join />
    </div>
  )
}

export default Home