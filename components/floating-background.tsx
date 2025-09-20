"use client"

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-cyan-50/30 animate-moving-bg" />

      {/* Floating morphing shapes */}
      <div className="floating-element w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full animate-morphing" />
      <div
        className="floating-element w-24 h-24 bg-gradient-to-br from-teal-200/15 to-cyan-200/15 rounded-full animate-morphing"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="floating-element w-40 h-40 bg-gradient-to-br from-cyan-200/10 to-emerald-200/10 rounded-full animate-morphing"
        style={{ animationDelay: "6s" }}
      />

      {/* Floating bubbles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full animate-floating-bubbles"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}
