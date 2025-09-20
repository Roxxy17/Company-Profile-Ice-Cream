"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animationType?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "rotate"
  delay?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  threshold = 0.2,
  rootMargin = "0px 0px -50px 0px",
  animationType = "fade",
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animationType) {
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-12 scale-95`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-12 scale-95`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-12 scale-95`
        case "scale":
          return `${baseClasses} opacity-0 scale-75`
        case "rotate":
          return `${baseClasses} opacity-0 rotate-12 scale-90`
        default:
          return `${baseClasses} opacity-0 translate-y-8 scale-95`
      }
    } else {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
    }
  }

  return (
    <div ref={elementRef} className={`${className} ${getAnimationClasses()}`}>
      {children}
    </div>
  )
}
