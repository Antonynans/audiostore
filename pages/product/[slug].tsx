import type { NextPage } from 'next'
import { Layout } from '../../components/layout';
import { Preview } from '../../components/preview';
import { IProduct } from '../../models/product';
import { GetStaticProps, GetStaticPaths } from 'next'



interface IProps {
  products: IProduct[]
  title: string

}

const Product: NextPage<IProps> = props => {

  return (
<div>
  
</div>
  )
}

export default Product
