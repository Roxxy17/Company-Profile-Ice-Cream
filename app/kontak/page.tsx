"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Toko",
      details: ["Jl. Manis Raya No. 123", "Jakarta Selatan 12345", "Indonesia"],
    },
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: ["0817-262-116 (24 Jam)", "0877-3821-1522 (WhatsApp)"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kunaka.com"],
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Setiap Hari: 24 Jam"],
    },
  ]

  const locations = [
    {
      name: "Kunaka Es Krim Puter Jakarta Selatan",
      address: "Jl. Manis Raya No. 123, Jakarta Selatan",
      phone: "0817-262-116",
      hours: "24 Jam",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
            Hubungi Kami
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up text-pretty">
            Kami siap membantu Anda! Jangan ragu untuk menghubungi tim Kunaka Es Krim Puter kapan saja.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">Kirim Pesan</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nama@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Nomor Telepon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0817-262-116"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subjek *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subjek pesan"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Pesan *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Lokasi Kami</h2>
              <Card className="h-96">
                <CardContent className="p-0 h-full">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-foreground font-semibold">Peta Interaktif</p>
                      <p className="text-muted-foreground text-sm">Jl. Manis Raya No. 123, Jakarta Selatan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Lokasi Toko Kami</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Kunjungi toko Kunaka Es Krim Puter di Jakarta Selatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{location.hours}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Lihat di Peta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Pertanyaan Umum</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Apakah Kunaka melayani delivery?",
                answer:
                  "Ya, kami melayani delivery ke seluruh area Jakarta Selatan dan sekitarnya. Minimum order berlaku untuk free delivery.",
              },
              {
                question: "Berapa lama es krim puter bisa bertahan di suhu ruang?",
                answer:
                  "Es krim puter sebaiknya tidak dibiarkan di suhu ruang lebih dari 2 jam. Untuk kualitas terbaik, segera simpan di freezer.",
              },
              {
                question: "Apakah ada varian es krim untuk penderita diabetes?",
                answer:
                  "Ya, kami memiliki varian sugar-free yang aman untuk penderita diabetes. Silakan tanyakan kepada staff kami.",
              },
              {
                question: "Bisakah memesan es krim dalam jumlah besar untuk acara?",
                answer:
                  "Tentu saja! Kami melayani pesanan dalam jumlah besar untuk acara dengan harga khusus. Hubungi kami minimal 3 hari sebelumnya.",
              },
            ].map((faq, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}