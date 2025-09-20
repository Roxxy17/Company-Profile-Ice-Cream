"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Filter, Search, Crown, Sparkles, Zap, Heart, Award, Flame } from "lucide-react"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"
import FloatingBackground from "@/components/floating-background"

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["Semua", "Klasik", "Premium", "Lokal", "Musiman"]

  const products = [
    {
      id: 1,
      name: "Es Krim Vanilla Premium",
      price: "Rp 25.000",
      rating: 4.9,
      category: "Klasik",
      image: "/premium-vanilla-ice-cream-scoop-with-vanilla-beans.jpg",
      description: "Es krim vanilla klasik dengan kualitas premium dan biji vanilla asli",
      badge: "Terlaris",
      icon: Crown,
    },
    {
      id: 2,
      name: "Es Krim Durian Medan",
      price: "Rp 35.000",
      rating: 4.8,
      category: "Lokal",
      image: "/creamy-durian-ice-cream-golden-color-tropical-frui.jpg",
      description: "Durian asli Medan dengan tekstur creamy dan aroma yang menggoda",
      badge: "Eksklusif",
      icon: Sparkles,
    },
    {
      id: 3,
      name: "Es Krim Cokelat Belgia",
      price: "Rp 30.000",
      rating: 4.9,
      category: "Premium",
      image: "/rich-belgian-chocolate-ice-cream-dark-cocoa-beans-.jpg",
      description: "Cokelat Belgia murni dengan tekstur lembut dan rasa yang kaya",
      badge: "Premium",
      icon: Zap,
    },
    {
      id: 4,
      name: "Es Krim Strawberry Fresh",
      price: "Rp 22.000",
      rating: 4.7,
      category: "Klasik",
      image: "/fresh-strawberry-ice-cream-with-real-strawberry-pi.jpg",
      description: "Strawberry segar dengan potongan buah asli dan rasa yang natural",
      badge: "Segar",
      icon: Heart,
    },
    {
      id: 5,
      name: "Es Krim Teh Hijau Matcha",
      price: "Rp 28.000",
      rating: 4.6,
      category: "Lokal",
      image: "/green-tea-matcha-ice-cream-japanese-style.jpg",
      description: "Teh hijau matcha premium dengan rasa yang autentik dan warna alami",
      badge: "Autentik",
      icon: Award,
    },
    {
      id: 6,
      name: "Es Krim Salted Caramel",
      price: "Rp 32.000",
      rating: 4.8,
      category: "Premium",
      image: "/salted-caramel-ice-cream-with-caramel-swirl-golden.jpg",
      description: "Karamel asin dengan swirl karamel yang lezat dan tekstur yang creamy",
      badge: "Trending",
      icon: Flame,
    },
    {
      id: 7,
      name: "Es Krim Kelapa Muda",
      price: "Rp 24.000",
      rating: 4.5,
      category: "Lokal",
      image: "/young-coconut-ice-cream-tropical-white-creamy.jpg",
      description: "Kelapa muda segar dengan tekstur tropical dan rasa yang menyegarkan",
    },
    {
      id: 8,
      name: "Es Krim Pandan",
      price: "Rp 26.000",
      rating: 4.7,
      category: "Musiman",
      image: "/pandan-ice-cream-green-natural-indonesian-flavor.jpg",
      description: "Pandan asli dengan aroma dan warna alami khas Indonesia",
    },
    {
      id: 9,
      name: "Es Krim Cookies & Cream",
      price: "Rp 29.000",
      rating: 4.8,
      category: "Premium",
      image: "/cookies-and-cream-ice-cream-oreo-pieces-black-whit.jpg",
      description: "Kombinasi sempurna vanilla dan potongan cookies yang renyah",
    },
    {
      id: 10,
      name: "Es Krim Mangga Harum Manis",
      price: "Rp 27.000",
      rating: 4.6,
      category: "Musiman",
      image: "/mango-ice-cream-tropical-orange-fresh-fruit.jpg",
      description: "Mangga harum manis pilihan dengan rasa tropical yang segar",
    },
    {
      id: 11,
      name: "Es Krim Red Velvet",
      price: "Rp 31.000",
      rating: 4.7,
      category: "Premium",
      image: "/red-velvet-ice-cream-cream-cheese-swirl-red-color.jpg",
      description: "Red velvet dengan cream cheese swirl yang lembut dan elegan",
    },
    {
      id: 12,
      name: "Es Krim Avocado",
      price: "Rp 25.000",
      rating: 4.4,
      category: "Lokal",
      image: "/avocado-ice-cream-green-creamy-healthy-indonesian.jpg",
      description: "Alpukat segar dengan tekstur creamy dan rasa yang unik",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBackground />
      <div className="relative z-10">
        <Navbar />

        <ScrollAnimation
          className="relative py-32 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 mt-20"
          animationType="fade"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation className="glass-premium rounded-3xl p-12 max-w-4xl mx-auto" animationType="scale">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 text-balance">
                Koleksi Es Krim Premium
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
                Jelajahi berbagai varian rasa es krim berkualitas tinggi yang dibuat dengan bahan-bahan pilihan terbaik
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="py-12 bg-gradient-to-r from-teal-50/30 to-emerald-50/30" animationType="slide-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
                  <Input
                    placeholder="Cari es krim..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-3 text-lg glass-premium border-emerald-200 focus:border-emerald-400 transition-colors duration-300"
                  />
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <Filter className="h-5 w-5 text-emerald-600" />
                  {categories.map((category, index) => (
                    <ScrollAnimation key={category} delay={index * 100} animationType="scale">
                      <Button
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover-glow"
                            : "glass-premium border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                        }`}
                      >
                        {category}
                      </Button>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ScrollAnimation key={product.id} threshold={0.2} animationType="slide-up" delay={index * 150}>
                  <Card className="group glass-card hover-glow border-0 overflow-hidden transform hover:scale-105 transition-all duration-500">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {product.badge && (
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-3 py-1 shadow-lg">
                            {product.icon && <product.icon className="w-3 h-3 mr-1" />}
                            {product.badge}
                          </Badge>
                        )}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-emerald-600 font-bold text-sm">{product.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-2 text-balance group-hover:text-emerald-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 text-pretty leading-relaxed">{product.description}</p>

                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 transition-colors duration-300 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-slate-600 font-medium">({product.rating})</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gradient">{product.price}</span>
                          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-700 text-white border-0 px-4 py-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Pesan
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <ScrollAnimation className="text-center py-20" animationType="scale">
                <div className="glass-premium rounded-2xl p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-emerald-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-700 mb-3">Tidak ada produk yang ditemukan</p>
                  <p className="text-slate-600 mb-6">Coba ubah filter atau kata kunci pencarian</p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("Semua")
                      setSearchTerm("")
                    }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  >
                    Reset Filter
                  </Button>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </ScrollAnimation>

        <Footer />
      </div>
    </div>
  )
}
