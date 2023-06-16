"use client"
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { HiAtSymbol, HiLockClosed, HiEyeOff, HiEye, HiOutlineLogout } from "react-icons/hi";
import CourseCard from './component/coursecard';
import Head from 'next/head';

export default function Home() {
  const courses = [
    {
      code: 'ABC123',
      name: 'Introduction to Next.js',
      year: 2565,
      semester: 2,
      image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEgD5NHT8mOVTFDfa2STV2kQf039tCtT3kAJMXRDeUe74RDE2T.webp',
      link: '/dashboard'
    },
    {
      code: 'ABC456',
      name: '[01] SC361002 Structured Programming for IT',
      year: 2565,
      semester: 2,
      image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEgD5NHT8mOVTFDfa2STV2kQf039tCtT3kAJMXRDeUe74RDE2T.webp',
      link: '/dashboard'
    },

  ];
  return (
    <>
    <Head>
      <title>Teaching Assistant</title>
    </Head>
    <div>
      <Navbar pagetype={'index'} />
      </div>
      <div className="mx-auto container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20">
          {courses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </div>
    </>
  )
}


