import { useState } from 'react'

export default function Hero() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-gradient-to-r from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-primary-600">nextjs-react-app</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern Next.js application built with TypeScript and Tailwind CSS.
            Get started by editing pages/index.tsx and see your changes instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCount(count + 1)}
              className="btn btn-primary"
            >
              Count: {count}
            </button>
            <button
              onClick={() => setCount(0)}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
