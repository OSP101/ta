"use client"
import { useSession, SessionProvider,signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import style from '../styles/Login.module.css'

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const delay = 2000;
    const timeout = setTimeout(() => {
      if (!session) {
        router.push('/login');
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [session, router]);

  return (
    <SessionProvider session={session}>
      <div>
        {session ? <User session={session} /> : <Guest />}
      </div>
    </SessionProvider>
  );
}

function Guest() {
  return (
    <div>
      <h1>ต้องเข้าสู่ระบบก่อน!! </h1>
      {/* Other guest content */}
    </div>
  );
}

function User({ session }) {
  return (
    <div>
      <h1>Welcome</h1>
      <h5>{session.user.name}</h5>
      <h5>{session.user.email}</h5>
      <button onClick={() => signOut()} className={style.button}>Sign out</button>
          </div>
  );
}
