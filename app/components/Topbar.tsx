import React from 'react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-dark-bg/80 backdrop-blur flex items-center border-b border-neon-blue/30 px-8 shadow">
      {/* Placeholder for search bar */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="bg-dark-surface text-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue/60 w-64 max-w-full"
        />
      </div>
      {/* Placeholder for toggles and status */}
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-neon-blue/20 rounded-full animate-neon-pulse" />
        <div className="w-8 h-8 bg-neon-pink/20 rounded-full animate-neon-pulse" />
        <div className="w-8 h-8 bg-neon-purple/20 rounded-full animate-neon-pulse" />
      </div>
    </header>
  )
} 