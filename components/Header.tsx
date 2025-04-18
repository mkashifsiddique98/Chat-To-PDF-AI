import { UserButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FilePlus2 } from 'lucide-react'

const Header = () => {
    return (
        <div className="flex justify-between bg-white shadow-sm p-5 border-2">
            <Link href={"/dashboard"} className="text-2xl">
                Chat to <span className="text-indigo-600">PDF</span>
            </Link>
            
            <SignedIn >
                <div className="flex justify-center space-x-2">
                    {/* prcing  */}
                    <Button asChild className="hidden md:flex">
                        <Link href={"/dashboard/upgrade"}>Pricing</Link>
                    </Button>
                    <Button asChild variant={"outline"}>
                        <Link href={"/dashboard"}>My Documents</Link>
                    </Button>
                    <Button asChild className="border-indigo-600" variant={"outline"}>
                        <Link href={"/dashboard/upload"}>
                        <FilePlus2 className="text-indigo-600"/>
                        </Link>
                    </Button>
                    <UserButton />
                </div>
            </SignedIn>



        </div>
    )
}

export default Header