"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Heart, Leaf, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"
import FloatingBackground from "@/components/floating-background"

export default function TentangPage() {
  const values = [
    {
      icon: Heart,
      title: "Kualitas Terbaik",
      description:
        "Kami berkomitmen menggunakan bahan-bahan premium dan proses produksi yang higienis untuk menghasilkan es krim berkualitas tinggi.",
    },
    {
      icon: Leaf,
      title: "Bahan Alami",
      description:
        "Semua produk kami dibuat dari bahan-bahan alami tanpa pengawet buatan, memberikan rasa yang autentik dan sehat.",
    },
    {
      icon: Users,
      title: "Kepuasan Pelanggan",
      description:
        "Kepuasan pelanggan adalah prioritas utama kami. Setiap feedback berharga untuk terus meningkatkan kualitas produk.",
    },
    {
      icon: Award,
      title: "Inovasi Berkelanjutan",
      description:
        "Kami terus berinovasi menghadirkan varian rasa baru yang unik dan menarik untuk memanjakan lidah pelanggan.",
    },
  ]

  const timeline = [
    {
      year: "2010",
      title: "Awal Mula",
      description:
        "FrostyDelight dimulai dari dapur kecil dengan resep rahasia keluarga dan tekad untuk menghadirkan es krim berkualitas.",
    },
    {
      year: "2013",
      title: "Toko Pertama",
      description:
        "Membuka toko pertama di Jakarta Selatan dan mulai melayani pelanggan dengan berbagai varian rasa unik.",
    },
    {
      year: "2016",
      title: "Ekspansi Regional",
      description:
        "Memperluas jangkauan ke berbagai kota di Indonesia dan memperkenalkan rasa-rasa lokal yang autentik.",
    },
    {
      year: "2019",
      title: "Penghargaan Pertama",
      description: "Meraih penghargaan 'Best Ice Cream Brand' dari Indonesian Food & Beverage Awards.",
    },
    {
      year: "2022",
      title: "Go Digital",
      description:
        "Meluncurkan platform online dan layanan delivery untuk menjangkau lebih banyak pelanggan di seluruh Indonesia.",
    },
    {
      year: "2024",
      title: "Masa Depan",
      description:
        "Terus berinovasi dengan teknologi terbaru dan berkomitmen menjadi brand es krim terdepan di Asia Tenggara.",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBackground />
      <div className="relative z-10">
        <Navbar />

        <ScrollAnimation className="relative py-32 bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation>
                <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8 text-balance">
                  Tentang FrostyDelight
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed text-pretty">
                  Perjalanan kami dimulai dari kecintaan terhadap es krim berkualitas tinggi dan keinginan untuk
                  menghadirkan kebahagiaan melalui setiap scoop yang kami sajikan.
                </p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-8 py-4 text-lg hover-glow">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="relative">
                  <div className="glass-card rounded-3xl p-4 animate-float">
                    <img
                      src="/placeholder.svg?height=500&width=600"
                      alt="FrostyDelight Story"
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

        <ScrollAnimation className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation>
                <Card className="glass-card hover-glow border-0 h-full">
                  <CardContent className="p-10">
                    <h2 className="text-3xl font-bold text-gradient mb-6">Misi Kami</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Menghadirkan es krim berkualitas premium dengan cita rasa autentik Indonesia yang dapat dinikmati
                      oleh seluruh keluarga. Kami berkomitmen untuk terus berinovasi dan memberikan pengalaman yang tak
                      terlupakan melalui setiap produk yang kami sajikan.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation>
                <Card className="glass-card hover-glow border-0 h-full">
                  <CardContent className="p-10">
                    <h2 className="text-3xl font-bold text-gradient mb-6">Visi Kami</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Menjadi brand es krim terdepan di Asia Tenggara yang dikenal karena kualitas premium, inovasi
                      berkelanjutan, dan komitmen terhadap kepuasan pelanggan. Kami ingin menjadi bagian dari momen
                      bahagia setiap keluarga Indonesia.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="py-32 bg-gradient-to-br from-teal-50/30 to-emerald-50/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-balance">Nilai-Nilai Kami</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Prinsip-prinsip yang menjadi fondasi dalam setiap langkah perjalanan FrostyDelight
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollAnimation key={index} threshold={0.3}>
                  <Card className="text-center glass-card hover-glow border-0 h-full">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <value.icon className="h-10 w-10 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-balance">Perjalanan Kami</h2>
              <p className="text-xl text-slate-600 text-pretty leading-relaxed">
                Dari dapur kecil hingga menjadi brand es krim terpercaya di Indonesia
              </p>
            </ScrollAnimation>

            <div className="relative">
              {/* Enhanced timeline line */}
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 rounded-full"></div>

              {timeline.map((item, index) => (
                <ScrollAnimation key={index} threshold={0.4}>
                  <div className="relative flex items-start mb-16">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-lg z-10 shadow-lg">
                      {item.year}
                    </div>
                    <div className="ml-12 flex-1">
                      <Card className="glass-card hover-glow border-0">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <Footer />
      </div>
    </div>
  )
}
