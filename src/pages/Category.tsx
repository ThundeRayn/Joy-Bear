import Categories from "../components/Categories"
import Hero from "../components/Hero"
//import Upbadge from "../components/Upbadge"


const Category = () => {
  return (
    <div>
      {/* <Upbadge 
      title="Find Your Kind of Joy"
      description="Browse our curated toy families — from licensed IP favorites to whimsical playground fun and custom creations."/> */}

    <Hero 
    title="Find Your Kind of Joy" 
    description="Browse our curated toy families — from licensed IP favorites to whimsical playground fun and custom creations."
    img="https://images.unsplash.com/photo-1746087484286-6586b53d2107?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    <div className="flex flex-col justify-center text-center py-8 px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Categories</h2>
      <p>Explore our diverse range of toy categories tailored for every child's joy.</p>
    </div>
    <Categories />
    </div>
  )
}

export default Category