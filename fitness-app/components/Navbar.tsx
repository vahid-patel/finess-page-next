import { navItems } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-black font-heading text-primary">
              FitPro
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="font-semibold">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
