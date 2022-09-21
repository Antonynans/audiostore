import Image from "next/image"
import Link from "next/link"
import { MdNavigateNext } from 'react-icons/md'
import { categories } from "../utils/categories"


const Categories: React.FC = () => {
  return (
    <>
    <main>
      <div className="xl:w-4/5 w-11/12 container mx-auto my-20 md:flex justify-between">
      {categories.map((cat, i) => (
        <div className="shadow-3xl md:mx-2 py-8 my-16 w-full rounded-md flex flex-col items-center justify-center relative hover:text-orange-500" key={i}>
        <div className="absolute -top-12 w-40 h-40">
        <Image  src={cat.image}
          alt={cat.title}
          placeholder="blur"
          objectFit="cover"  />
        </div>
        <p className="text-center mt-16 uppercase text-black">{cat.title}</p>
        <Link href={cat.slug}>
          <a className="flex items-center justify-center text-sm">SHOP <MdNavigateNext className="text-orange-500" /> </a>
        </Link>
      </div>
      ))}
        
      </div>
    </main>
    </>
  )
}

export default Categories