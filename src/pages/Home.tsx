
//import Banner from '../components/Banner'
//import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import BrandIntro from '../components/BrandIntro'
//import Footer from '../components/Footer'
import Certification from '../components/Certification'
import Service from '../components/Service'
import Join from '../components/Join'

const Home = () => {
  return (
    <div>
        {/* <Banner /> */}
        {/* <Navbar /> */}
        <Carousel/>
        <BrandIntro />
        <Service />
        <Certification />
        <Join />
        {/* <Footer /> */}
    </div>
  )
}

export default Home