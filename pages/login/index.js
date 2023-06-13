"use client"
import style from '../../styles/Login.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { HiAtSymbol, HiLockClosed, HiEyeOff, HiEye,HiOutlineLogout} from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";
import Layout from './layout';
import Head from 'next/head';


export default function Login() {

    const [show, setShow] = useState(false)

      async function handleGoogleSignin(){
        signIn('google',{callbackUrl:"http://localhost:3000"})
      }
  return (
    <Layout>
        <Head>
        <title>Login - Teaching Assistant</title>
        </Head>
<section className="w-3/4 mx-auto flex flex-col gap-10">
    <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Welcome to website</h1>
        <p className="w-3/4 mx-auto text-gray-400">All students are welcome to the admission check website.</p>
    </div>

    <form className="flex flex-col gap-5">
        <div className={style.input_group}>
            <input
            type="email"
            name="email"
            placeholder="Email"
            className={style.input_text}/>
            <span className='icon flex items-center px-4'>
                <HiAtSymbol size={25}/>
            </span>
        </div>
        <div className={style.input_group}>
            <input
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className={style.input_text}/>
            <span className='icon flex items-center px-4' onClick={()=>setShow(!show)}>
{show ? <HiEye size={25}/> : <HiEyeOff size={25}/>}
            </span>
        </div>

        <div className="input-button">
            <button type="submit" className={style.button}>Login</button>
        </div>
        <div>
        <p className="w-3/4 mx-auto text-gray-400">or</p>
        </div>
        <div className="input-button">
            <button type="button" className={style.button_custom} onClick={handleGoogleSignin}>Sign in with Google <Image src={'/Google__G__Logo.svg'} width="20" height={20}></Image></button>
        </div>


    </form>

</section>
</Layout>
  )
}