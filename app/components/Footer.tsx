import React from 'react'
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const menuFooter = [
    { name: 'Facebook', icon: FaFacebook, path: 'https://facebook.com' },
    { name: 'YouTube', icon: FaYoutube, path: 'https://youtube.com' },
    { name: 'TikTok', icon: FaTiktok, path: 'https://tiktok.com' },
  ]

  return (
    <footer className="bg-black text-white py-10 px-6 flex flex-col items-center">
      <h2 className="text-orange-500 font-bold text-xl mb-4">🐾 Cat Développeur</h2>
      <p className="text-center text-sm text-gray-300 max-w-md mb-6">
        La communauté des développeurs passionnés qui construisent ensemble des projets innovants.
      </p>

      <ul className="flex gap-5 mb-4">
        {menuFooter.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-orange-400 transition text-sm"
            >
              <item.icon className="text-xl" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Evoubabp - Cat Développeur — Tous droits réservés</p>
    </footer>
  )
}
