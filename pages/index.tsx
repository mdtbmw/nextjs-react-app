import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nextjs-react-app</title>
        <meta name="description" content="Generated with Next.js, TypeScript, and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

export default Home
