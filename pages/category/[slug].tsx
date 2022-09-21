import type { NextPage } from 'next'
import { Layout } from '../../components/layout';
import { Preview } from '../../components/preview';
import { IProduct } from '../../models/product';
import { GetStaticProps, GetStaticPaths } from 'next'
import { routes } from '../../utils/routes';
import { products } from '../../data';
import { SEO } from '../../components/seo';


interface IProps {
  products: IProduct[]
  title: string

}

function capitalize_first_letter(string: string) {
  return 'AudioStore | ' + string.charAt(0).toUpperCase() + string.slice(1)
}


const CategoryPage: NextPage<IProps> = props => {
  
  return (
    <>
     <SEO
        title={capitalize_first_letter(props.title)}
        desc={`Browse exceptional high quality ${props.title} on AudioStore`}
      />
      <Layout>
        <div>
        <p className='bg-black text-white h-52 flex items-center justify-center text-4xl uppercase'>{props.title}</p>
        </div>
        <div className='mt-12'>
          {props.products
            .filter(product => product.new)
            ?.map(product => (
              <Preview product={product} key={product.name} />
            ))}
          {props.products
            .filter(product => !product.new)
            ?.map((product, idx) => (
              <Preview
                product={product}
                key={product.name}
                reverse={idx % 2 === 0}
              />
            ))}
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes
    .filter(route => route.title !== 'home')
    .map(route => {
      return {
        params: { slug: route.title || '' },
      }
    })
  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const data = products.filter(product => product.category === slug)
  return {
    props: { products: data, title: slug },
  }
}


export default CategoryPage
