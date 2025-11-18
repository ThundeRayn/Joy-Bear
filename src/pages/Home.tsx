
import Carousels from '../components/Carousels'
//import BrandIntro from '../components/BrandIntro'
//import Certification from '../components/Certification'
import Service from '../components/Service'
import Join from '../components/Join'
//import NewToys from '../components/NewToys'
import Categories from '../components/Categories'
import TagToys from '../components/TagToys'
import Hero from '../components/Hero'
import Heros from '../components/Heros'

const Home = () => {
  return (
    <div>
        <Hero />
        <Heros />
        <Carousels/>
        <TagToys />
        <Categories />
        <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/>
        <Service />
        <Join />
    </div>
  )
}

export default Home