'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

export default function Home() {
  return (
    <div className="min-h-screen flex bg-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 min-h-screen floral-bg">
        <Topbar />
        <main className="flex-1 p-8 pt-8 space-y-16">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 neon-text"
              >
                Technical Perspective Architect
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              >
                Exploring the intersection of technology, design, and human experience
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-64 bg-dark-surface rounded-lg border border-gray-800 shadow-lg neon-glow flex items-center justify-center mb-8"
              >
                {/* Placeholder for hero visual */}
                <button className="neon-btn mt-4">View Projects</button>
              </motion.div>
            </div>
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