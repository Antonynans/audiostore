import Image from "../node_modules/next/image"
import Link from "../node_modules/next/link"
import { AiOutlineArrowRight } from 'react-icons/ai';

const Categories: React.FC = () => {
  return (
    <>
    <main>
      <div className="container mx-auto my-20 md:flex justify-between lg:px-16 px-4">
        <div className="shadow-3xl md:mx-2 py-8 my-16 w-full rounded-md flex flex-col items-center justify-center relative">
          <div className="absolute -top-12">
          <Image src='/headphones_c_1.webp' width='150' height='150' />
          </div>
          <p className="text-center mt-16">HEADPHONES</p>
          <Link href='/headphones'>
            <a className="flex items-center justify-center hover:text-orange-500">SHOP <AiOutlineArrowRight /> </a>
          </Link>
        </div>
        <div className="shadow-3xl md:mx-2 py-8 my-16 w-full rounded-md flex flex-col items-center justify-center relative">
          <div className="absolute -top-12">
          <Image src='/speaker-thumbnail.png' width='150' height='150' />
          </div>
          <p className="text-center mt-16">SPEAKERS</p>
          <Link href='/speakers'>
            <a className="flex items-center justify-center hover:text-orange-500">SHOP <AiOutlineArrowRight /> </a>
          </Link>
        </div>
        <div className="shadow-3xl md:mx-2 py-8 my-16 w-full rounded-md flex flex-col items-center justify-center relative">
          <div className="absolute -top-12">
          <Image src='/watch_1.webp' width='150' height='150' />
          </div>
          <p className="text-center mt-16">WATCHES</p>
          <Link href='/watches'>
            <a className="flex items-center justify-center hover:text-orange-500">SHOP <AiOutlineArrowRight /> </a>
          </Link>
        </div>
        <div className="shadow-3xl md:mx-2 py-8 my-16 w-full rounded-md flex flex-col items-center justify-center relative">
          <div className="absolute -top-12">
          <Image src='/earphones_c_1.webp' width='150' height='150' />
          </div>
          <p className="text-center mt-16">EARPHONES</p>
          <Link href='/earphones'>
            <a className="flex items-center justify-center hover:text-orange-500">SHOP <AiOutlineArrowRight /> </a>
          </Link>
        </div>
      </div>
    </main>
    </>
  )
}

export default Categories