import { IProduct } from "../models/product"
import { Features } from "./features"
import { Gallery } from "./gallery"
import { Includes } from "./includes"
import { Showcase } from "./showcase"
import { Suggestion } from "./suggestion"

interface IProps {
  product: IProduct
}


export const Product: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <div className='w-full m-auto mt-12 '>
        <Showcase product={product} />
        <Features text={product.features} />
        <Includes includes={product.includes} />
        <Gallery gallery={product.gallery} />
        <div className='xl:w-4/5 w-11/12 container mx-auto'>
          <h2 className='mb-8 uppercase text-center text-[1.75rem] lg:text-2xl'>you may also like</h2>
          <ul className='mb-12 flex flex-col md:flex-row gap-24 md:gap-4'>
            {product.others.map(sug => {
              return <Suggestion suggestion={sug} key={sug.name} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
