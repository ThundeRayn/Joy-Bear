import { Helmet } from 'react-helmet-async'
import Heros from '../components/HomePage/Heros'
import TagToyPresentation from '../components/HomePage/TagToyPresentation'
import Hero from '../components/HomePage/Hero'
import ContactBadge from '../components/ContactBadge'
// TEMP-HIDDEN:home-certification (see log/TEMP_DISABLED.md)
// import Certification from '../components/ContactPage/Certification'
// TEMP-HIDDEN:home-service (see log/TEMP_DISABLED.md)
// import Service from '../components/HomePage/Service'



const Home = () => {
  return (
    <div>
        <Helmet>
          <title>JoyBear Toys | Custom Stuffed Animals, Plush Toys & OEM Factory</title>
          <meta name="description" content="JoyBear creates custom plush toys, stuffed animals, and eco-friendly gifts loved by families and businesses. OEM & ODM manufacturing services available." />
          <link rel="canonical" href="https://www.joybeartoys.com/" />
        </Helmet>
        <Hero
        img='https://res.cloudinary.com/dqj2gwlpf/image/upload/q_auto,f_auto,w_1200/v1769208847/home_l0xdey.png'
        objectPosition = 'center 70%'/>
        

        <TagToyPresentation />
        <Heros />
        {/* <Carousels/> */}
        {/* <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/> */}
        {/* <Categories /> */}

        {/* TEMP-HIDDEN:home-certification start (see log/TEMP_DISABLED.md) */}
        {/* <Certification /> */}
        {/* TEMP-HIDDEN:home-certification end */}
        {/* <Img /> */}
        {/* TEMP-HIDDEN:home-service start (see log/TEMP_DISABLED.md) */}
        {/* <Service /> */}
        {/* TEMP-HIDDEN:home-service end */}
         <ContactBadge />
    </div>
  )
}

export default Home