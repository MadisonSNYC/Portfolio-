import React from 'react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Press', href: '#press' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-[#0a0a13] border-b border-gray-900 fixed top-0 left-0 z-50">
      <div className="font-mono text-lg font-bold text-neon-blue">Madison Sutton</div>
      <nav className="flex items-center space-x-2">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="nav-link text-sm px-3 py-2">
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  )
} 