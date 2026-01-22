import Categories from "../components/Categories"
import Hero from "../components/HomePage/Hero"
//import Upbadge from "../components/Upbadge"


const Category = () => {
  return (
    <div>
      {/* <Upbadge 
      title="Find Your Kind of Joy"
      description="Browse our curated toy families — from licensed IP favorites to whimsical playground fun and custom creations."/> */}

    <Hero 
    title="Find Our Categories" 
    description="Explore our diverse range of toy categories tailored for every child's joy."
    img="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769038297/game-cover_zteoct.jpg"/>

    <div className="flex flex-col justify-center text-center py-8 lg:pt-12 px-5 lg:px-8 pb-6 md:pb-8 lg:pb-12">
      <h2 className="text-3xl font-semibold text-black mb-4 uppercase">Categories</h2>
      <p>Explore our diverse range of toy categories tailored for every child's joy.</p>
    </div> 
    <Categories />
    </div>
  )
}

export default Category