import type { NextPage } from 'next'
import { Layout } from '../../components/layout';
import { IProduct } from '../../models/product';
import { GetStaticProps, GetStaticPaths } from 'next'
import { SEO } from '../../components/seo';
import { ParsedUrlQuery } from 'querystring'
import { Product } from '../../components/product';
import { products } from '../../data';



interface IProps {
  product: IProduct

}

const ProductPage: NextPage<IProps> = props => {
  const { product } = props

  return (
<>
<SEO
        title={product.name}
        desc={product.description}
      />
      <Layout>
        <Product product={product} />
      </Layout>
</>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(product => {
    return {
      params: { slug: product.slug || '' },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams
  const data = products.find(product => product.slug === slug)
  return {
    props: { product: data },
  }
}

export default ProductPage
