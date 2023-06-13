import React, { useState } from 'react';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Contentsub from './component/contentsub';

export default function Layout() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='h-screen'>
        <Navbar/>
            <Contentsub/>
        <div className='bottom-0'>
        <Footer/>
        </div>
    </div>
  );
}
