"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Breaking News", href: "/breaking-news" },
    { name: "Technology", href: "/Technology" },
    { name: "Sports", href: "/Sports" },
    { name: "General News", href: "/general-news" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-2xl font-bold text-blue-400">NewsBlog</div>

          
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-400 transition-colors ${
                  pathname === link.href ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

        
          <div className="md:hidden">
            <button className="p-2 text-gray-300 hover:text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
