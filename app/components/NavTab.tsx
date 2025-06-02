import React from 'react'

interface NavTabProps {
  label?: string
  icon?: string
  href?: string
}

export default function NavTab({ label = 'Tab', icon = '🌱', href = '#' }: NavTabProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 rounded-2xl shadow-soft p-4 bg-white text-ink hover:bg-accentPink transition-colors duration-200"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-semibold">{label}</span>
    </a>
  )
} 