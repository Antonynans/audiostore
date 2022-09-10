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
      <div className=''>
        <Showcase product={product} />
        <Features text={product.features} />
        <Includes includes={product.includes} />
        <Gallery gallery={product.gallery} />
        <div className=''>
          <h2 className=''>you may also like</h2>
          <ul className=''>
            {product.others.map(sug => {
              return <Suggestion suggestion={sug} key={sug.name} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
