import { Button } from "@/components/ui/button"
import { Shield, Award, Leaf } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit">
              <Award className="h-4 w-4" />
              Más de 20 años de experiencia
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Control Integral de Plagas <span className="text-primary">Profesional y Ecológico</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Protegemos tu hogar y negocio con soluciones efectivas y respetuosas con el medio ambiente. Certificados y
              comprometidos con tu seguridad.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <Link href="/contacto">Solicitar Cotización Gratis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Certificados SAG</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Métodos Ecológicos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">20+ Años</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-full">
              <img
                src="/professional-pest-control-technician-inspecting-ho.jpg"
                alt="Técnico profesional de control de plagas"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-card p-6 shadow-lg border border-border hidden md:block">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
