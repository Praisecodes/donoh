'use client'

import Link from "next/link";
import { useState } from "react";

const NavList = (): JSX.Element => {
  const [options] = useState<any[]>([
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About Us',
      url: '/about',
    },
    {
      title: 'Contact Us',
      url: '/contact',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'Privacy',
      url: '/privacy',
    },
  ]);

  return (
    <nav className="list-none">
      {options.map((option) => (
        <li style={{ fontFamily: 'Montserrat' }} className="float-left duration-150 hover:text-[#C32C31] text-black text-base mx-2">
          <Link href={option.url} className="px-2">
            {option.title}
          </Link>
        </li>
      ))}
    </nav>
  )
}

export default NavList;
