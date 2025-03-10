"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "service",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function Nav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={link.name}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all duration-200`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
