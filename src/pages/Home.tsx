
import Carousel from '../components/Carousel'
//import BrandIntro from '../components/BrandIntro'
import Certification from '../components/Certification'
import Service from '../components/Service'
import Join from '../components/Join'
import NewToys from '../components/NewToys'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
        {/* <Banner /> */}
        {/* <Navbar /> */}
        <Carousel/>
        <NewToys />
        <Categories />
        <Service />
        <Certification />
        <Join />
        {/* <Footer /> */}
    </div>
  )
}

export default Home