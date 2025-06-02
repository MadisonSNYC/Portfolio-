'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

export default function Home() {
  return (
    <div className="min-h-screen flex bg-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-52 min-h-screen floral-bg">
        <Topbar />
        <main className="flex-1 p-10 pt-12 md:pt-20 space-y-20 relative z-10">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] px-4">
            <div className="max-w-3xl mx-auto text-center relative z-20">
              <h1 className="text-5xl md:text-7xl font-extrabold neon-text mb-8 leading-tight drop-shadow-lg">Technical Perspective Architect</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium">From $300M in NYC real estate to building AI trading platforms and custom CRMs. <span className="text-neon-blue font-bold">This is Madison's pivot.</span></p>
              <button className="neon-btn text-lg px-10 py-4 mb-8">See the Work</button>
            </div>
            {/* Visual Hook Placeholder */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[220px] md:w-[600px] md:h-[320px] bg-gradient-to-br from-neon-blue/30 via-neon-purple/20 to-neon-pink/30 rounded-3xl blur-2xl opacity-60 z-10 pointer-events-none" />
          </section>

          {/* Press Section */}
          <section className="px-4 bg-dark-surface/50 rounded-xl shadow-lg">
            <div className="max-w-7xl mx-auto py-12">
              <h2 className="section-title text-center">As Seen In</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="card neon-glow w-full h-24 flex items-center justify-center">
                    <span className="text-gray-500">Press Logo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card neon-glow group">
                    <div className="aspect-video bg-gray-800 rounded mb-4"></div>
                    <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                    <p className="text-gray-400">Project description placeholder</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics Section */}
          <section className="px-4 bg-dark-surface/50 rounded-xl shadow-lg">
            <div className="max-w-7xl mx-auto py-12">
              <h2 className="section-title">Impact Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Projects Completed', value: '50+' },
                  { title: 'Years Experience', value: '8+' },
                  { title: 'Client Satisfaction', value: '98%' }
                ].map((metric) => (
                  <div key={metric.title} className="card neon-glow text-center">
                    <div className="text-4xl font-bold neon-text mb-2">{metric.value}</div>
                    <div className="text-gray-400">{metric.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Diary Section */}
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title">Digital Garden</h2>
              <div className="card neon-glow">
                <div className="aspect-[16/9] bg-gray-800 rounded mb-4"></div>
                <p className="text-gray-400 text-center">Interactive diary and thought process visualization coming soon</p>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>© {new Date().getFullYear()} Madison Sutton. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
} 