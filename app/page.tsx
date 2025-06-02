'use client'

import React from 'react'
import Sidebar from './components/Sidebar'
import MoodCard from './components/MoodCard'
import ProjectCard from './components/ProjectCard'
import ThoughtCard from './components/ThoughtCard'

export default function Home() {
  return (
    <div className="min-h-screen flex bg-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 min-h-screen floral-bg">
        <main className="flex-1 p-10 pt-20 space-y-16 relative z-10">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="max-w-3xl mx-auto text-center relative z-20">
              <h1 className="text-4xl md:text-6xl font-extrabold neon-text mb-4">@TheNYCAgent</h1>
              <h2 className="text-xl md:text-2xl text-floral-accent italic mb-4">At The NYC Agent Team</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">From NYC real estate to creative tech—welcome to the portfolio.</p>
            </div>
            {/* Neon/Floral Visual Hook */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[220px] md:w-[600px] md:h-[320px] bg-gradient-to-br from-neon-blue/30 via-neon-purple/20 to-neon-pink/30 rounded-3xl blur-2xl opacity-60 z-10 pointer-events-none" />
          </section>
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MoodCard />
            <ProjectCard />
            <ThoughtCard />
            <div className="rounded-2xl neon-glow p-6 bg-dark-surface text-floral-accent mb-6 flex items-center justify-center text-lg font-semibold">Coming Soon…</div>
          </div>
        </main>
      </div>
    </div>
  )
} 