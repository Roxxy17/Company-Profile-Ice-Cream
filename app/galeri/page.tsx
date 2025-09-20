"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Heart, Share2, Eye, Calendar, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"
import FloatingBackground from "@/components/floating-background"

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("semua")

  const categories = [
    { id: "semua", name: "Semua", count: 24 },
    { id: "produk", name: "Produk", count: 12 },
    { id: "proses", name: "Proses Pembuatan", count: 8 },
    { id: "event", name: "Event & Acara", count: 4 },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Es Krim Vanilla Premium",
      category: "produk",
      image: "/placeholder-ewgp6.png",
      likes: 245,
      views: 1200,
      date: "2024-01-15",
      location: "Studio FrostyDelight",
    },
    {
      id: 2,
      title: "Proses Pembuatan Es Krim",
      category: "proses",
      image: "/placeholder-i1z1p.png",
      likes: 189,
      views: 890,
      date: "2024-01-10",
      location: "Pabrik Jakarta",
    },
    {
      id: 3,
      title: "Es Krim Durian Medan",
      category: "produk",
      image: "/placeholder-z0t8q.png",
      likes: 312,
      views: 1450,
      date: "2024-01-08",
      location: "Studio FrostyDelight",
    },
    {
      id: 4,
      title: "Grand Opening Cabang Baru",
      category: "event",
      image: "/placeholder-7xk1h.png",
      likes: 567,
      views: 2100,
      date: "2024-01-05",
      location: "Surabaya",
    },
    {
      id: 5,
      title: "Es Krim Cokelat Belgia",
      category: "produk",
      image: "/placeholder-nqr4k.png",
      likes: 298,
      views: 1350,
      date: "2024-01-03",
      location: "Studio FrostyDelight",
    },
    {
      id: 6,
      title: "Tim Produksi Berpengalaman",
      category: "proses",
      image: "/placeholder-w3pdk.png",
      likes: 156,
      views: 780,
      date: "2023-12-28",
      location: "Pabrik Jakarta",
    },
  ]

  const filteredItems =
    selectedCategory === "semua" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <ScrollAnimation className="relative py-32 bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-premium rounded-3xl p-12 max-w-4xl mx-auto">
              <Camera className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 text-balance">Galeri FrostyDelight</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
                Jelajahi momen-momen indah, proses pembuatan, dan kebahagiaan pelanggan kami melalui koleksi foto
                terbaik
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Category Filter */}
        <ScrollAnimation className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover-glow"
                      : "glass-premium border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-current">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Gallery Grid */}
        <ScrollAnimation className="pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <ScrollAnimation key={item.id} threshold={0.2}>
                  <Card className="group glass-card hover-glow border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-white">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center">
                                <Heart className="w-4 h-4 mr-1" />
                                {item.likes}
                              </div>
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {item.views}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                          {categories.find((cat) => cat.id === item.category)?.name}
                        </Badge>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>

                        <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(item.date).toLocaleDateString("id-ID")}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-slate-600">
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {item.likes}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {item.views}
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Load More Button */}
            <ScrollAnimation className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="glass-premium border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg bg-transparent"
              >
                Muat Lebih Banyak
                <Camera className="ml-2 h-5 w-5" />
              </Button>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <Footer />
      </div>
    </div>
  )
}
