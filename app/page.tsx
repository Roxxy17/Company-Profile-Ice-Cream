"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Users, Award, Truck, Heart, Sparkles, Crown, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"
import FloatingBackground from "@/components/floating-background"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Es Krim Premium Rasa Autentik",
      subtitle: "Nikmati kelezatan es krim terbaik dengan bahan-bahan pilihan",
      image: "/premium-vanilla-ice-cream-scoops-with-fresh-vanill.jpg",
    },
    {
      title: "Cita Rasa Indonesia yang Menggoda",
      subtitle: "Dari durian hingga teh hijau, rasakan keunikan Indonesia",
      image: "/colorful-indonesian-ice-cream-flavors-durian-match.jpg",
    },
    {
      title: "Dibuat dengan Cinta Sejak 2010",
      subtitle: "Resep rahasia keluarga yang telah dipercaya ribuan pelanggan",
      image: "/artisan-ice-cream-making-process-traditional-kitch.jpg",
    },
  ]

  const featuredProducts = [
    {
      name: "Es Krim Vanilla Premium",
      price: "Rp 25.000",
      rating: 4.9,
      image: "/premium-vanilla-ice-cream-scoop-with-vanilla-beans.jpg",
      badge: "Terlaris",
      icon: Crown,
    },
    {
      name: "Es Krim Durian Medan",
      price: "Rp 35.000",
      rating: 4.8,
      image: "/creamy-durian-ice-cream-golden-color-tropical-frui.jpg",
      badge: "Eksklusif",
      icon: Sparkles,
    },
    {
      name: "Es Krim Cokelat Belgia",
      price: "Rp 30.000",
      rating: 4.9,
      image: "/rich-belgian-chocolate-ice-cream-dark-cocoa-beans-.jpg",
      badge: "Premium",
      icon: Zap,
    },
  ]

  const stats = [
    { icon: Users, value: "50K+", label: "Pelanggan Puas" },
    { icon: Award, value: "15+", label: "Penghargaan" },
    { icon: Truck, value: "100+", label: "Kota Terjangkau" },
    { icon: Heart, value: "25+", label: "Varian Rasa" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBackground />
      <div className="relative z-10">
        <Navbar />

        <section className="relative h-screen overflow-hidden mt-20">
          <div className="absolute inset-0 gradient-overlay-1"></div>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
            </div>
          ))}

          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <ScrollAnimation animationType="scale" className="max-w-5xl glass-premium rounded-3xl p-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-balance leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-3xl text-white/90 mb-12 text-pretty leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-8 py-4 text-lg hover-glow"
                >
                  Jelajahi Produk
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-premium border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg bg-transparent"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </section>

        <ScrollAnimation className="py-24 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation
                  key={index}
                  className="text-center"
                  threshold={0.5}
                  animationType="slide-up"
                  delay={index * 200}
                >
                  <div className="glass-card w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                    <stat.icon className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-3">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="py-32 relative" animationType="fade">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation className="text-center mb-20" animationType="slide-up">
              <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6 text-balance">Produk Unggulan Kami</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Rasakan kelezatan es krim premium dengan berbagai varian rasa yang menggugah selera
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredProducts.map((product, index) => (
                <ScrollAnimation key={index} threshold={0.3} animationType="slide-up" delay={index * 300}>
                  <Card className="group glass-card hover-glow border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-2">
                          <product.icon className="w-4 h-4 mr-2" />
                          {product.badge}
                        </Badge>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{product.name}</h3>
                        <div className="flex items-center mb-6">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-3 text-slate-600 font-medium">({product.rating})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-gradient">{product.price}</span>
                          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-6 py-3">
                            Pesan
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation className="text-center mt-16" animationType="fade" delay={900}>
              <Button
                variant="outline"
                size="lg"
                className="glass-premium border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg bg-transparent"
              >
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="py-32 bg-gradient-to-br from-teal-50/50 to-emerald-50/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation className="order-2 lg:order-1" animationType="slide-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8 text-balance">
                  Cerita di Balik FrostyDelight
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Dimulai dari dapur kecil pada tahun 2010, FrostyDelight kini telah menjadi merek es krim terpercaya di
                  Indonesia. Kami berkomitmen menghadirkan es krim berkualitas premium dengan cita rasa autentik yang
                  tak terlupakan.
                </p>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Setiap scoop es krim kami dibuat dengan bahan-bahan pilihan terbaik dan resep rahasia keluarga yang
                  telah diwariskan turun-temurun.
                </p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-8 py-4 text-lg hover-glow">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </ScrollAnimation>
              <ScrollAnimation className="order-1 lg:order-2" animationType="slide-left">
                <div className="relative">
                  <div className="glass-card rounded-3xl p-4 animate-float">
                    <img
                      src="/modern-ice-cream-factory-clean-production-line-wor.jpg"
                      alt="FrostyDelight Factory"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse-slow opacity-20"></div>
                  <div
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full animate-pulse-slow opacity-15"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        <Footer />
      </div>
    </div>
  )
}
