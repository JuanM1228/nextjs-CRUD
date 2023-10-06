import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between items-center p-4 font-bold text-black'>
      <Link href='/'>Home</Link>
      <ul>
        <li>
          <Link href='/about'>Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
