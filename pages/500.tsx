import { NextPage } from "next"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const ServerError: NextPage = () => {
  return (
    <>
      <SEO title="500" desc="Oops ! Server error, our fault" />
      <Layout>
        <header className='py-16 px-40 text-white bg-black mb-40 flex flex-col justify-center items-center'>
          <h1 className="uppercase text-4xl">Oops ! server error</h1>
          <p className="mt-4 text-center text-[#cfcfcf]">Our fault ! we are looking into it </p>
        </header>
      </Layout>
    </>
  )
}

export default ServerError;