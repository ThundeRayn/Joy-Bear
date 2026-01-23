
import Heros from '../components/HomePage/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'
import Hero from '../components/HomePage/Hero'
import ContactBadge from '../components/ContactBadge'
import Certification from '../components/ContactPage/Certification'
import Service from '../components/HomePage/Service'



const Home = () => {
  return (
    <div>
        <Hero 
        img='https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769208847/home_l0xdey.png'
        objectPosition = 'center 70%'/>
        

        <TagToyPresentation />
        <Heros />
        {/* <Carousels/> */}
        {/* <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/> */}
        {/* <Categories /> */}

        <Certification />
        {/* <Img /> */}
        <Service />
         <ContactBadge />
    </div>
  )
}

export default Home