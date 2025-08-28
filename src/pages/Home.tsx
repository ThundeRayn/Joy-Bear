
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import BrandIntro from '../components/BrandIntro'
import Footer from '../components/Footer'
import Certification from '../components/Certification'
import Service from '../components/Service'

const Home = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <Carousel/>
        <BrandIntro />
        <Service 
          topImageUrl="https://picsum.photos/600/800?toy1"
          bottomImageUrl="https://picsum.photos/600/800?toy2"
        />
        <Certification />
        <Footer />
    </div>
  )
}

export default Home