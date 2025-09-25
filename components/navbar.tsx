"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, IceCream, ShoppingCart, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-emerald-100 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10 rounded-2xl shadow-lg border-2 border-emerald-400 bg-white object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Es Puter Mulyo Langgeng
              </span>
              <span className="text-xs text-gray-500 -mt-1">Beragam Rasa Es Krim Puter</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute inset-0 bg-emerald-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            ))}

            <div className="flex items-center space-x-2">
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href="tel:0817262116">
                  <Phone className="w-5 h-5 mr-2" /> Pesan Sekarang
                </a>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:bg-emerald-50 p-2 rounded-xl"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in-up h-100vh fixed inset-0 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-emerald-100 shadow-xl">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-emerald-100 mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl py-3"
                >
                  <a href="tel:0817262116">
                    <Phone className="w-5 h-5 mr-2" /> Telepon: 0817-262-116
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
