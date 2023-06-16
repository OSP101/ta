import { useRouter } from 'next/router';
import React from 'react'
import Navbar from '../../component/navbar'
import Dashboard from '../../component/dashboard'
import Link from 'next/link'

const DynamicPage = () => {
  const router = useRouter();
  const pathData = router.query;
  const sid = pathData?.sid;
  const id = sid || 'default-value';

  return (
    <div>
      <div className='h-screen bg-gray-50'>
        <Navbar para={id} />
        <div className='p-4 sm:ml-64'>
          <div className='p-4 mt-14'>
          </div>
        </div>
        <div className='bottom-0'>
        </div>
      </div>
    </div>
  )
};

export default DynamicPage;
