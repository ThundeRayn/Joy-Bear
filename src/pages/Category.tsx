import Categories from "../components/Categories"
import Upbadge from "../components/Upbadge"


const Category = () => {
  return (
    <div>
      <Upbadge 
      title="Find Your Kind of Joy"
      description="Browse our curated toy families — from licensed IP favorites to whimsical playground fun and custom creations."/>

    <div className="flex flex-col justify-center text-center py-8 px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Categories</h2>
      <p>Explore our diverse range of toy categories tailored for every child's joy.</p>
    </div>
    <Categories />
    </div>
  )
}

export default Category