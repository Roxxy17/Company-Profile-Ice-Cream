"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"
import FloatingBackground from "@/components/floating-background"
import { Search, Filter, Award, Leaf, CalendarHeart, Phone, MessageSquare } from "lucide-react"

const PRIMARY = "emerald"

export default function ProdukPage() {
	const [selectedCategory, setSelectedCategory] = useState("Semua")
	const [searchTerm, setSearchTerm] = useState("")

	const categories = [
		"Semua",
		"Buah Tropis",
		"Klasik",
		"Unik Nusantara",
		"Kombinasi Spesial"
	]

const products = [
    { id: 1, name: "Vanila", category: "Klasik", image: "/public/premium-vanilla-ice-cream-scoops-with-fresh-vanill.jpg", description: "Rasa vanila yang lembut dan otentik, disukai semua kalangan." },
    { id: 2, name: "Coklat", category: "Klasik", image: "/public/rich-belgian-chocolate-ice-cream-dark-cocoa-beans-.jpg", description: "Kelezatan cokelat premium yang pekat dan memanjakan lidah." },
    { id: 3, name: "Strawberry", category: "Buah Tropis", image: "/public/fresh-strawberry-ice-cream-with-real-strawberry-pi.jpg", description: "Kesegaran buah stroberi asli dengan sedikit rasa manis yang pas." },
    { id: 4, name: "Durian", category: "Buah Tropis", image: "/public/creamy-durian-ice-cream-golden-color-tropical-frui.jpg", description: "Rasa otentik dari raja buah, durian pilihan dengan aroma kuat." },
    { id: 5, name: "Alpukat", category: "Buah Tropis", image: "/public/avocado-ice-cream-green-creamy-healthy-indonesian.jpg", description: "Tekstur lembut dan creamy dari buah alpukat mentega terbaik." },
    { id: 6, name: "Nanas", category: "Buah Tropis", image: "/public/mango-ice-cream-tropical-orange-fresh-fruit.jpg", description: "Sensasi segar dan tropis dari buah nanas pilihan." },
    { id: 7, name: "Nangka", category: "Buah Tropis", image: "/public/colorful-indonesian-ice-cream-flavors-durian-match.jpg", description: "Aroma khas dan manis dari potongan buah nangka matang." },
    { id: 8, name: "Sirsak", category: "Buah Tropis", image: "/public/placeholder.jpg", description: "Kombinasi rasa manis dan asam yang menyegarkan dari buah sirsak." },
    { id: 9, name: "Melon", category: "Buah Tropis", image: "/public/placeholder.jpg", description: "Rasa manis dan menyegarkan dari sari buah melon pilihan." },
    { id: 10, name: "Tape Ketan", category: "Unik Nusantara", image: "/public/placeholder.jpg", description: "Rasa manis legit dari fermentasi tape ketan tradisional." },
    { id: 11, name: "Kacang Hijau", category: "Unik Nusantara", image: "/public/placeholder.jpg", description: "Kelezatan bubur kacang hijau yang diubah menjadi es krim lembut." },
    { id: 12, name: "Kopyor", category: "Unik Nusantara", image: "/public/placeholder.jpg", description: "Rasa gurih khas kelapa kopyor yang mewah dan istimewa." },
    { id: 13, name: "Teller", category: "Unik Nusantara", image: "/public/placeholder.jpg", description: "Inspirasi dari es teler, perpaduan buah yang menyegarkan." },
    { id: 14, name: "Coklat + Alpukat", category: "Kombinasi Spesial", image: "/public/placeholder.jpg", description: "Duet sempurna antara pahitnya coklat dan lembutnya alpukat." },
    { id: 15, name: "Kelapa Muda + Nangka", category: "Kombinasi Spesial", image: "/public/placeholder.jpg", description: "Kombinasi gurih kelapa muda dengan manisnya aroma nangka." },
]

	const filteredProducts = products.filter((product) => {
		const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
		const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
		return matchesCategory && matchesSearch
	})

	return (
		<div className="min-h-screen bg-gradient-to-b from-white/80 via-white/60 to-emerald-100 text-slate-800 relative overflow-hidden">
			<FloatingBackground />
			<div className="relative z-10">
				<Navbar />

				<main>
					{/* Hero Section */}
					<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center flex flex-col items-center justify-center">
						{/* Custom emerald gradient transparant overlay */}
						<div className="absolute inset-0 pointer-events-none z-0"
							style={{
								background: "linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(16,185,129,0.15) 60%, rgba(16,185,129,0.35) 100%)"
							}}
						/>
						<div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
							<ScrollAnimation animationType="fade" delay={100}>
								<h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
									<span className="bg-gradient-to-r from-emerald-500/80 via-emerald-400/60 to-emerald-600/80 bg-clip-text text-transparent">
										Kelezatan Legendaris
									</span>
									<span className="block text-xl md:text-2xl font-medium text-slate-600 mt-2">Es Krim Mulyo Langgeng</span>
								</h1>
							</ScrollAnimation>
							<ScrollAnimation animationType="fade" delay={300}>
								<p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
									Nikmati es puter dan es krim otentik yang dibuat dari resep warisan dan bahan-bahan terbaik, siap memeriahkan setiap momen berharga Anda.
								</p>
							</ScrollAnimation>
						</div>
					</section>

					{/* Keunggulan */}
					<section className="py-12 md:py-20 mx-2 md:mx-0">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
								<ScrollAnimation animationType="slide-up" delay={100}>
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-center h-16 w-16 rounded-xl bg-emerald-100 text-emerald-600 mb-4 shadow-lg border border-emerald-200">
											<Award className="h-8 w-8" />
										</div>
										<h3 className="text-lg font-bold mb-2">Resep Legendaris</h3>
										<p className="text-slate-600 text-pretty">Diolah berdasarkan resep warisan turun-temurun yang menjaga cita rasa otentik.</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animationType="slide-up" delay={200}>
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-center h-16 w-16 rounded-xl bg-emerald-100 text-emerald-600 mb-4 shadow-lg border border-emerald-200">
											<Leaf className="h-8 w-8" />
										</div>
										<h3 className="text-lg font-bold mb-2">Bahan Pilihan Terbaik</h3>
										<p className="text-slate-600 text-pretty">Hanya menggunakan bahan baku segar dan berkualitas untuk hasil yang maksimal.</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animationType="slide-up" delay={300}>
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-center h-16 w-16 rounded-xl bg-emerald-100 text-emerald-600 mb-4 shadow-lg border border-emerald-200">
											<CalendarHeart className="h-8 w-8" />
										</div>
										<h3 className="text-lg font-bold mb-2">Spesialis Acara Anda</h3>
										<p className="text-slate-600 text-pretty">Siap melayani dan memeriahkan berbagai acara, dari arisan hingga pernikahan.</p>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</section>

					{/* Galeri Produk */}
					<section id="produk" className="py-16 md:py-2 bg-gradient-to-t from-white/80 via-white/60 to-transparent relative z-2">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<ScrollAnimation animationType="fade" className="text-center mb-12">
								<h2 className="text-3xl md:text-4xl font-bold text-emerald-700">Temukan Rasa Favorit Anda</h2>
								<p className="text-slate-600 mt-2 max-w-2xl mx-auto">Jelajahi beragam pilihan rasa es krim kami yang unik dan menyegarkan.</p>
							</ScrollAnimation>

							{/* OPSI 1: Desain yang Disempurnakan & Elegan */}
							<div className="sticky top-4 z-20 p-2 mb-10 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/80 max-w-4xl mx-auto">
								<div className="flex flex-col md:flex-row gap-3 items-center justify-between">

									{/* Search Input */}
									<div className="relative w-full md:w-auto flex-shrink-0">
										<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
										<Input
											placeholder="Cari rasa..."
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
											className="pl-11 pr-4 py-2.5 text-base w-full md:w-64 bg-slate-100/50 border-slate-200 rounded-full focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
										/>
									</div>

									{/* Filter Categories */}
									<div className="relative w-full overflow-hidden">
										{/* Masking untuk efek fade-out di ujung area scroll */}
										<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 via-white/50 to-transparent pointer-events-none md:from-transparent md:via-transparent"></div>

										<div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
											<Filter className="h-5 w-5 text-emerald-600 flex-shrink-0 ml-2" />
											{categories.map((category) => (
												<Button
													key={category}
													variant={selectedCategory === category ? "default" : "ghost"}
													size="sm"
													onClick={() => setSelectedCategory(category)}
													className={`rounded-xl flex-shrink-0 transition-all duration-300 font-semibold px-4 py-2 ${selectedCategory === category
															? "bg-emerald-500 text-white hover:bg-emerald-600 shadow"
															: "text-slate-600 hover:bg-emerald-100 hover:text-emerald-700"
														}`}
												>
													{category}
												</Button>
											))}
										</div>
									</div>

								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
								{filteredProducts.map((product, index) => (
									<ScrollAnimation key={product.id} animationType="slide-up" delay={index * 50}>
										<Card className="group bg-white rounded-2xl shadow-xl hover:shadow-emerald-300 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100 hover:border-emerald-400">
											<CardContent className="p-0">
												<div className="aspect-square w-full overflow-hidden relative">
													<img
														src={product.image || "/images/placeholder.jpg"}
														alt={product.name}
														className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
													/>
													<span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
														{product.category}
													</span>
												</div>
												<div className="p-5">
													<h3 className="text-lg font-bold text-slate-800 truncate">{product.name}</h3>
													<p className="text-sm text-slate-500 mt-1 min-h-[40px]">{product.description}</p>
												</div>
											</CardContent>
										</Card>
									</ScrollAnimation>
								))}
							</div>

							{filteredProducts.length === 0 && (
								<div className="text-center py-20">
									<div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-lg border border-emerald-100">
										<Search className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
										<p className="text-xl font-bold text-slate-700 mb-2">Rasa tidak ditemukan</p>
										<p className="text-slate-600 mb-6">Coba gunakan kata kunci atau filter yang lain.</p>
										<Button
											onClick={() => {
												setSelectedCategory("Semua")
												setSearchTerm("")
											}}
											className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
										>
											Reset Filter
										</Button>
									</div>
								</div>
							)}
						</div>
					</section>

					{/* CTA Pemesanan */}
					<section className="py-16 md:py-24 relative flex flex-col items-center justify-center">
						{/* Emerald gradient transparant overlay */}
						<div className="absolute inset-0 pointer-events-none z-0"
							style={{
								background: "linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(16,185,129,0.15) 60%, rgba(16,185,129,0.35) 100%)"
							}}
						/>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
							<ScrollAnimation animationType="fade">
								<h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-emerald-500/80 via-emerald-400/60 to-emerald-600/80 bg-clip-text text-transparent">
									Pesan Sekarang untuk Acara Anda
								</h2>
								<p className="text-emerald-900/90 mb-12 max-w-2xl mx-auto">
									Hanya dengan 3 langkah mudah, hadirkan kelezatan Es Krim Mulyo Langgeng di tengah-tengah kebahagiaan Anda.
								</p>
							</ScrollAnimation>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
								<ScrollAnimation animationType="slide-up" delay={100}>
									<div className="relative">
										<h3 className="text-5xl font-extrabold text-emerald-500 mb-2 drop-shadow">01</h3>
										<h4 className="text-lg font-semibold mb-2">Pilih Rasa</h4>
										<p className="text-emerald-900/80">Jelajahi galeri rasa di atas dan tentukan pilihan Anda.</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animationType="slide-up" delay={200}>
									<div className="relative">
										<h3 className="text-5xl font-extrabold text-emerald-500 mb-2 drop-shadow">02</h3>
										<h4 className="text-lg font-semibold mb-2">Hubungi Kami</h4>
										<p className="text-emerald-900/80">Sampaikan pesanan Anda melalui Telepon atau WhatsApp.</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animationType="slide-up" delay={300}>
									<div className="relative">
										<h3 className="text-5xl font-extrabold text-emerald-500 mb-2 drop-shadow">03</h3>
										<h4 className="text-lg font-semibold mb-2">Siap Memeriahkan</h4>
										<p className="text-emerald-900/80">Kami akan siapkan dan antarkan pesanan untuk acara Anda.</p>
									</div>
								</ScrollAnimation>
							</div>
							<ScrollAnimation animationType="scale" delay={400}>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										size="lg"
										asChild
										className="bg-white hover:bg-emerald-50 text-emerald-700 rounded-full shadow-lg transition-transform hover:scale-105 font-bold border border-emerald-200"
									>
										<a href="tel:0817262116">
											<Phone className="w-5 h-5 mr-2" /> Telepon: 0817-262-116
										</a>
									</Button>
									<Button
										size="lg"
										asChild
										className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-transform hover:scale-105 font-bold animate-pulse"
									>
										<a href="https://wa.me/6287738211522" target="_blank" rel="noopener noreferrer">
											<MessageSquare className="w-5 h-5 mr-2" /> Pesan via WhatsApp
										</a>
									</Button>
								</div>
							</ScrollAnimation>
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</div>
	)
}