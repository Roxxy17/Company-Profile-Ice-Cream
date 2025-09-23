import Link from "next/link"
import { IceCream, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart, Star } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10 rounded-2xl shadow-lg border-2 border-emerald-400 bg-white object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Kunaka
                </span>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Menyajikan es krim premium dengan cita rasa autentik Indonesia sejak 2010. Dibuat dengan bahan-bahan
              berkualitas tinggi dan resep rahasia keluarga yang telah dipercaya ribuan pelanggan.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Twitter, href: "#", color: "hover:text-blue-300" },
              ].map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Tautan Cepat</h3>
            <ul className="space-y-3">
              {["Beranda", "Produk", "Tentang Kami", "Galeri", "Kontak"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Produk Populer</h3>
            <ul className="space-y-3">
              {[
                { name: "Es Krim Vanilla Premium", price: "Rp 25.000" },
                { name: "Es Krim Cokelat Belgia", price: "Rp 30.000" },
                { name: "Es Krim Strawberry Fresh", price: "Rp 28.000" },
                { name: "Es Krim Durian Medan", price: "Rp 35.000" },
                { name: "Es Krim Teh Hijau Matcha", price: "Rp 32.000" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm group flex justify-between items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    <span className="text-emerald-400 font-medium">{item.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Kontak Kami</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Jl. Manis Raya No. 123, Jakarta Selatan 12560", color: "text-emerald-400" },
                { icon: Phone, text: "+62 21 1234 5678", color: "text-teal-400" },
                { icon: Mail, text: "info@frostydelight.com", color: "text-emerald-400" },
              ].map(({ icon: Icon, text, color }, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <Icon
                    className={`h-5 w-5 ${color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-semibold text-emerald-400 mb-2">Jam Operasional</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>09:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span>08:00 - 23:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 FrostyDelight. Semua hak cipta dilindungi.</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>1000+ Pelanggan Puas</span>
              </span>
              <span>|</span>
              <span>50+ Varian Rasa</span>
              <span>|</span>
              <span>Delivery 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
