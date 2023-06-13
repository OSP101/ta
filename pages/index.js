"use client"
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { HiAtSymbol, HiLockClosed, HiEyeOff, HiEye,HiOutlineLogout} from "react-icons/hi";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const logout = () => {
    signOut();
  };

  useEffect(() => {
    if (!session) {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2000);

    // ตอนถอยหลัง ล้าง timeout
    return () => clearTimeout(timer);
  }
  }, [session, router]);

  if (session) {
    return (
      <>
        <Navbar />
            


      </>
    );
  }

  return(
    <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="rounded relative bg-white py-12">
            <div className="rounded-full bg-indigo-200 w-[177px] h-[177px] relative flex justify-center items-center mx-auto animate-spin">
              <svg
                className="absolute top-0 0 left-0"
                width={177}
                height={177}
                viewBox="0 0 177 177"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M169.667 88.5C173.717 88.5 177.032 85.2113 176.696 81.1755C175.457 66.2542 170.448 51.8477 162.085 39.332C152.361 24.7783 138.539 13.435 122.367 6.73666C106.196 0.0383073 88.4018 -1.71429 71.2345 1.7005C54.0672 5.11529 38.298 13.5441 25.9211 25.921C13.5441 38.298 5.1153 54.0672 1.7005 71.2345C-1.71429 88.4018 0.0383044 106.196 6.73666 122.367C13.435 138.539 24.7783 152.361 39.332 162.085C51.8477 170.448 66.2542 175.457 81.1755 176.696C85.2113 177.032 88.5 173.717 88.5 169.667V169.667C88.5 165.618 85.2089 162.373 81.1792 161.971C69.1624 160.774 57.5826 156.642 47.4795 149.891C35.3374 141.778 25.8738 130.247 20.2855 116.755C14.6971 103.264 13.2349 88.4181 16.0838 74.0955C18.9328 59.773 25.9649 46.6168 36.2909 36.2908C46.6169 25.9649 59.773 18.9328 74.0955 16.0838C88.4181 13.2349 103.264 14.6971 116.755 20.2855C130.247 25.8739 141.778 35.3375 149.891 47.4795C156.642 57.5826 160.774 69.1624 161.971 81.1793C162.373 85.209 165.618 88.5 169.667 88.5V88.5Z"
                  fill="#4338CA"
                />
              </svg>
              <div className="div rounded-full bg-slate-50 w-[150px] h-[150px]" />
            </div>
            <p className="mt-6 text-base font-medium text-gray-800 text-center">
              Loading ...
            </p>
          </div>
        </div>
      </div>
  )
}


