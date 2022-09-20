import { useRouter } from "next/router";


const Banner2: React.FC = () => {
  const router = useRouter();

  return(
    <div className='xl:w-4/5 w-11/12 container mx-auto my-6 lg:bg-[url("/desktop-speaker-zx7.jpg")] md:bg-[url("/tablet-speaker-zx7.jpg")] bg-[url("/mobile-speaker-zx7.jpg")] bg-no-repeat bg-center bg-cover rounded-md h-[320px] gap-10 flex flex-col justify-center items-start lg:px-16 px-4'>
 <h2 className=''>zx7 speaker</h2>
      <button className='py-4 px-8 mt-8 rounded-sm border-2 border-black hoverBtn' onClick={() => router.push('/product/zx7-speaker')}>
        see product
      </button>
    </div>
  )
}

export default Banner2;