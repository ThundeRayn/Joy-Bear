
import Join from '../components/HomePage/Join'
import Heros from '../components/HomePage/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'
import Hero from '../components/HomePage/Hero'
//import TagToys from '../components/HomePage/TagToys'
import Img from '../components/Img'



const Home = () => {
  return (
    <div>
        <Hero img='https://res.cloudinary.com/dqj2gwlpf/image/upload/c_crop,g_auto,h_1500/v1764552511/img2_ebhcga.png'/>
        

        <TagToyPresentation />
        <Heros />
        {/* <Carousels/> */}
        {/* <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/> */}
        {/* <Categories /> */}

        <Img />
        {/* <Service /> */}
         <Join />
    </div>
  )
}

export default Home