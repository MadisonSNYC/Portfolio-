'use client'

import React from 'react'
import NavTab from './components/NavTab'
import MoodCard from './components/MoodCard'
import ProjectCard from './components/ProjectCard'
import ThoughtCard from './components/ThoughtCard'

const navTabs = [
  { label: 'Home', icon: '🏠', href: '#' },
  { label: 'Projects', icon: '🛠️', href: '#' },
  { label: 'Mood', icon: '🌱', href: '#' },
  { label: 'Thoughts', icon: '💭', href: '#' },
]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-linen">
      {/* Mobile Nav */}
      <div className="flex md:hidden justify-around p-4 bg-linen">
        {navTabs.map(tab => (
          <NavTab key={tab.label} {...tab} />
        ))}
      </div>
      {/* Side Nav */}
      <nav className="hidden md:flex flex-col w-full md:w-1/5 p-6 space-y-6 bg-linen rounded-2xl shadow-soft">
        {navTabs.map(tab => (
          <NavTab key={tab.label} {...tab} />
        ))}
      </nav>
      {/* Main Content */}
      <main className="w-full md:w-4/5 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MoodCard />
          <ProjectCard />
          <ThoughtCard />
          <div className="rounded-2xl shadow-soft p-6 bg-white text-ink mb-6 flex items-center justify-center text-lg font-semibold">Coming Soon…</div>
        </div>
      </main>
    </div>
  )
} 