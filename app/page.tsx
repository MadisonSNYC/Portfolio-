'use client'

import React from 'react'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        {/* Hero Section */}
        <section className="w-full max-w-3xl mx-auto text-center py-24 bg-dark-bg">
          <h1 className="text-5xl md:text-7xl font-extrabold neon-text mb-8 leading-tight drop-shadow-lg">Technical Perspective Architect</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium">From $300M in NYC real estate to building AI trading platforms and custom CRMs. <span className="text-neon-blue font-bold">This is Madison's pivot.</span></p>
          <button className="neon-btn text-lg px-10 py-4 mb-8">See the Work</button>
        </section>
        {/* Other sections can be added below */}
      </main>
    </div>
  )
} 