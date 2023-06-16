import React from 'react'
import Navbar from '../component/navbar'
import Dashboard from '../component/dashboard'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Index() {
    const router = useRouter()
    const id = router.query
    const test = id.id
    console.log(test)
    return (
        <div>
            <div className='h-screen bg-gray-50'>
                <Navbar para={test}/>
                <div className='p-4 sm:ml-64'>
                    <div className='p-4 mt-14'>
                        <Dashboard para={test}/>
                    </div>
                </div>
                <div className='bottom-0'>
                </div>
            </div>
        </div>
    )
}