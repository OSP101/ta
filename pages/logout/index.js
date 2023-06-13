import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      await signOut(); // ทำการ sign out ผ่าน NextAuth.js
      router.push('/login'); // เปลี่ยนเส้นทางไปยังหน้า login
    };

    handleSignOut();
  }, []);

  return <></>;
}

