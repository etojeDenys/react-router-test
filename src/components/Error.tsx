import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-5xl text-red-900">Something went wrong</h1>
            <button
                onClick={() => navigate(-1)}
                className="text-sm hover:text-gray-600 hover:underline"
            >
                Go Back
            </button>
        </div>
    )
}

export default Error
