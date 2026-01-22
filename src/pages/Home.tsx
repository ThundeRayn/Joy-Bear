
import Heros from '../components/HomePage/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'
import Hero from '../components/HomePage/Hero'
//import TagToys from '../components/HomePage/TagToys'
import Img from '../components/Img'
import ContactBadge from '../components/ContactBadge'



const Home = () => {
  return (
    <div>
        <Hero objectPosition = 'center 70%'/>
        

        <TagToyPresentation />
        <Heros />
        {/* <Carousels/> */}
        {/* <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/> */}
        {/* <Categories /> */}

        <Img />
        {/* <Service /> */}
         <ContactBadge />
    </div>
  )
}

export default Home