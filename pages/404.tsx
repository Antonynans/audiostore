import { NextPage } from "next"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const NotFound: NextPage = () => {
  return (
    <>
      <SEO title="404" desc="Oops ! Not found" />
      <Layout>
        <header className='py-16 px-40 text-white bg-black mb-40 flex flex-col justify-center items-center'>
          <h1 className="uppercase text-4xl">Not found</h1>
          <p className="mt-4 text-center text-[#cfcfcf]">This page does not exist or has been deleted </p>
        </header>
      </Layout>
    </>
  )
}
export default NotFound