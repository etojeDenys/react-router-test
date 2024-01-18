import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-5xl text-red-900">Something went wrong</h1>
        <Link to="/" className="text-sm hover:text-gray-600 hover:underline">
            Go Back
        </Link>
    </div>
)

export default Error
