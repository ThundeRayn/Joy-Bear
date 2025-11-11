
import Carousel from '../components/Carousel'
//import BrandIntro from '../components/BrandIntro'
import Certification from '../components/Certification'
import Service from '../components/Service'
import Join from '../components/Join'
//import NewToys from '../components/NewToys'
import Categories from '../components/Categories'
import TagToys from '../components/TagToys'

const Home = () => {
  return (
    <div>
        {/* <Banner /> */}
        {/* <Navbar /> */}
        <Carousel/>
        <TagToys />
        <Categories />
        <TagToys title='Hotest' tagName='Hotest'/>
        <Service />
        <Certification />
        <Join />
        {/* <Footer /> */}
    </div>
  )
}

export default Home