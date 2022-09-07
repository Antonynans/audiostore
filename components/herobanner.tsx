import Image from '../node_modules/next/image'

const HeroBanner: React.FC = () => {
  return (
   <>
   <main className='bg-black'>
<div className="container mx-auto  flex lg:flex-row flex-col justify-center items-center">
  <div className='text-white'>
<p className=''>New product</p>
<p>Bose 700 Headphones</p>
<p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
<button>See Product</button>
</div>
<Image src="/headphones_a_1.webp" width={700} height={700} alt='' />
</div>
</main>
   </>
  )
}

export default HeroBanner
