import React from 'react'
import Navbar from './component/navbar'
import Link from 'next/link'
import { Menu } from '@headlessui/react';
import { HiDotsVertical, HiCog, HiTrash } from "react-icons/hi";
import Footer from './component/footer';
import CourseCard from './component/coursecard';
import style from '../styles/Login.module.css'
import Dashboard from './component/dashboard';

export default function Test() {

  return (
    <div className='h-screen bg-gray-50'>

        <Navbar />

        <div className='p-4 sm:ml-64'>
          <div className='p-4 mt-14'>
<Dashboard/>
        </div>
        </div>
        <div className='bottom-0'>
        </div>
    </div>
  )
}
