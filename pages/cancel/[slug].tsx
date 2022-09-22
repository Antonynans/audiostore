import type { NextPage } from 'next'
import { SEO } from '../../components/seo'
import toast from "react-hot-toast";

const Cancel: NextPage = () => {
  return (
   <>
<SEO
        title='cancel page'
        desc=''
      />
         { toast.loading('Redirecting...')};
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
