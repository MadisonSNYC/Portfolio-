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
    <aside className="fixed left-0 top-0 h-full w-64 bg-dark-surface border-r border-gray-800 flex flex-col justify-between z-40 shadow-lg">
      <div>
        <div className="h-24 flex flex-col items-center justify-center border-b border-gray-800">
          <span className="font-mono text-2xl font-bold neon-text">@TheNYCAgent</span>
          <span className="text-floral-accent text-sm italic mt-1">At The NYC Agent Team</span>
        </div>
        <nav className="mt-8 flex flex-col space-y-2 px-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link rounded transition-colors hover:bg-dark-bg/40">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      {/* Floral/organic accent */}
      <div className="h-24 flex items-end justify-center pb-6">
        <div className="w-16 h-8 bg-floral-accent/30 rounded-full blur-lg" />
      </div>
    </aside>
  )
} 