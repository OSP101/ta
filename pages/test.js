import React from 'react'
import Navbar from './component/navbar'
import Link from 'next/link'
import { Menu } from '@headlessui/react';
import { HiDotsVertical, HiCog, HiTrash } from "react-icons/hi";
import Footer from './component/footer';
import CourseCard from './component/coursecard';
import style from '../styles/Login.module.css'

export default function Test() {

    const courses = [
        {
          code: 'ABC123',
          name: 'Introduction to Next.js',
          year: 2565,
          semester: 2,
          image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEgD5NHT8mOVTFDfa2STV2kQf039tCtT3kAJMXRDeUe74RDE2T.webp',
          link:'/layout'
        },
        {
            code: 'ABC123',
            name: 'Introduction to Next.js',
            year: 2565,
            semester: 2,
            image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEgD5NHT8mOVTFDfa2STV2kQf039tCtT3kAJMXRDeUe74RDE2T.webp',
            link:'/layout'
          },
          {
            code: 'ABC123',
            name: 'Introduction to Next.js',
            year: 2565,
            semester: 2,
            image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEgD5NHT8mOVTFDfa2STV2kQf039tCtT3kAJMXRDeUe74RDE2T.webp',
            link:'/layout'
          },
          {
              code: 'ABC123',
              name: 'Introduction to Next.js',
              year: 2565,
              semester: 2,
              image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEgD5NHT8mOVTFDfa2STV2kQf039tCtT3kAJMXRDeUe74RDE2T.webp',
              link:'/layout'
            },
      ];


  return (
    <div className='h-screen'>

        <Navbar />

        <div className='mx-auto container my-auto mb-[12.5rem]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 '>
            {courses.map((course) => (
        <CourseCard key={course.code} course={course} />
      ))}
            </div>
        </div>
        <div className='bottom-0'>
        <Footer/>
        </div>
    </div>
  )
}
