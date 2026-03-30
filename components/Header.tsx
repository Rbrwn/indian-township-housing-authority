'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/staff',    label: 'Staff' },
  { href: '/apply',    label: 'Apply for Housing' },
  { href: '/chap',     label: 'CHAP' },
  { href: '/policies', label: 'Policies' },
  { href: '/notices',  label: 'Notices' },
  { href: '/blog',     label: 'News' },
  { href: '/contact',  label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-forest-800 text-white transition-shadow duration-200 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}
      role="banner"
    >
      <div className="bg-forest-900 py-1 px-4 text-center text-xs text-green-200 font-body">
        Passamaquoddy Tribe at Indian Township — Princeton, Maine
      </div>
      <div className="container-main">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label="Indian Township Housing Authority — Home"
          >
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Indian Township Housing Authority logo — tipi and house by the river"
                width={96}
                height={96}
                className="w-20 h-20 object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base leading-tight">
                Indian Township
              </div>
              <div className="font-heading font-bold text-xs sm:text-sm text-green-300 leading-tight">
                Housing Authority
              </div>
              <div className="text-xs text-green-400 font-body hidden sm:block">
                Passamaquoddy Tribe
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 rounded-md text-xs font-body font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive ? 'bg-forest-700 text-white' : 'text-green-100 hover:bg-forest-700 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-green-100 hover:bg-forest-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="lg:hidden bg-forest-900 border-t border-forest-700">
          <ul className="container-main py-2 flex flex-col gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-md text-sm font-body font-medium transition-colors ${
                      isActive ? 'bg-forest-700 text-white' : 'text-green-100 hover:bg-forest-700 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
