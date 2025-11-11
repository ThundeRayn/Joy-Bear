
import Carousel from '../components/Carousel'
//import BrandIntro from '../components/BrandIntro'
import Certification from '../components/Certification'
import Service from '../components/Service'
import Join from '../components/Join'
import NewToys from '../components/NewToys'

const Home = () => {
  return (
    <div>
        {/* <Banner /> */}
        {/* <Navbar /> */}
        <Carousel/>
        <NewToys />
        <Service />
        <Certification />
        <Join />
        {/* <Footer /> */}
    </div>
  )
}

export default Home