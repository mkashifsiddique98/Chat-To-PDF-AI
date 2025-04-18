"use client"
import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const PlaceholderDocuments = () => {
    const Route = useRouter();
    const handleClick = () => {
        Route.push("/dashboard/upload")
    }
    return (
        <Button
            onClick={handleClick}
            className="flex flex-col itens-center justify-center w-64 h-80 rounded-x1 bg-gray-200 drop-shadow-md text-gray-400 cursor-pointer">
            <PlusCircleIcon className="h-16 w-16" />
            <p>Add a document</p>

        </Button>
    )
}

export default PlaceholderDocuments