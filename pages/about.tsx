import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - nextjs-react-app</title>
        <meta name="description" content="About page for nextjs-react-app" />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is a Next.js application built with TypeScript and Tailwind CSS.
            It includes a modern development setup with ESLint, Prettier, and more.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default About
