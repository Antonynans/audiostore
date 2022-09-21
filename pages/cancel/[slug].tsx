import type { NextPage } from 'next'
import { SEO } from '../../components/seo'
import { useEffect } from 'react';

const Cancel: NextPage = () => {

  useEffect(() => {
    
   
  }, []);

  return (
   <>
<SEO
        title='cancel page'
        desc=''
      />
      
   </>
  )
}

export default Cancel;

export async function getServerSideProps({ req, res }) {

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
}
