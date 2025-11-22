"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Eco Control Pefyh Logo" width={48} height={48} className="h-12 w-12" />
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-bold leading-tight text-foreground">Eco Control Pefyh</span>
            <span className="text-xs text-muted-foreground">Control de Plagas</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/servicios" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="/nosotros" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Nosotros
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Blog
          </Link>
          <Button asChild>
            <Link href="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Button asChild className="w-full">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                Solicitar Cotización
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
