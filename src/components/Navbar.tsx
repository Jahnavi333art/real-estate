"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 inset-x-0 h-[5rem] bg-white shadow z-50">
      <div className="px-2.5 sm:px-10 ">
        <div className="h-[5rem] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              width={250}
              height={200}
              alt="logo"
              priority
              style={{ width: "28vmin", height: "auto" }}
            />
          </Link>

          {/* Menu Items */}
          <div className="flex sm:gap-4">
            {navItems.map((navItem) => (
              <Link key={navItem.name} href={navItem.url}>
                <Button
                  variant={pathname === navItem.url ? "secondary" : "ghost"}
                  className="text-sm sm:text-md"
                >
                  {navItem.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
