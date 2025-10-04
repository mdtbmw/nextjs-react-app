import type { NextApiRequest, NextApiResponse } from 'next'
import type { ApiResponse } from '@/types/global'

type Data = {
  message: string
  timestamp: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Data>>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      data: { message: 'Method not allowed', timestamp: new Date().toISOString() },
      message: 'Only GET requests are allowed'
    })
  }
  
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello from Next.js API!',
      timestamp: new Date().toISOString()
    }
  })
}
