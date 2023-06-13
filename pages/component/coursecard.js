import React from 'react';
import { Menu } from '@headlessui/react';
import { HiDotsVertical, HiCog, HiTrash } from 'react-icons/hi';
import Link from 'next/link';

const CourseCard = ({ course }) => {
  return (
    <Link href={course.link} className="bg-white rounded-lg shadow-lg w-18.75rem h-18.375rem relative">
            <div className="relative h-40">
        <img
          src={course.image}
          alt={course.image}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-4 text-gray-600">
        <p className="text-sm mb-1">รหัสวิชา: {course.code}</p>
        <p className="text-lg font-semibold mb-1 truncate">ชื่อวิชา: {course.name}</p>
        <p className="text-sm mb-1">ปีการศึกษา: {course.year}</p>
        <p className="text-sm mb-4">เทอม: {course.semester}</p>
        <Menu as="div" className="absolute top-0 right-2 mt-3">
          <Menu.Button className="focus:outline-none ">
            <HiDotsVertical color='white' size={20}/>
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                    href={course.link}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                >
                  <HiCog className='pr-2' size={25}/>
                  แก้ไขวิชา
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                    href={course.link}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                >
                  <HiTrash className='pr-2' size={25}/>
                  ลบ
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </Link>
  );
};

export default CourseCard;