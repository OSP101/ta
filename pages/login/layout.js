import React from 'react'
import style from '../../styles/Login.module.css'

export default function Layout({children}) {
  return (
    <div className='flex h-screen bg-gray-400'>
        <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/3 grid lg:grid-cols-2'>
            <div className={style.imgStyle}>
                <div className={style.cartoonImg}></div>
            </div>
            <div className='right flex flex-col justify-evenly'>
                <div className='text-center py-10'>
                {children}
                </div>
            </div>
        </div>
    </div>
  )
}
