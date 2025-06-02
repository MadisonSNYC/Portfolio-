import React from 'react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Press', href: '#press' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-52 bg-[#0a0a13] border-r border-gray-900 flex flex-col justify-between z-40">
      <div>
        <div className="h-16 flex items-center justify-center border-b border-gray-900">
          <span className="font-mono text-lg font-bold text-neon-blue">Madison Sutton</span>
        </div>
        <nav className="mt-6 flex flex-col space-y-1 px-4">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link text-sm px-3 py-2">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      {/* Placeholder for floral/organic accent */}
      <div className="h-16 flex items-end justify-center pb-4">
        <div className="w-10 h-5 bg-floral-accent/30 rounded-full blur-lg" />
      </div>
    </aside>
  )
} 