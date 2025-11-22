import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
            ¿Necesitas Ayuda con Plagas?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
            Solicita una cotización gratuita y sin compromiso. Nuestro equipo de expertos está listo para ayudarte a
            resolver tu problema de plagas de manera efectiva y segura.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contacto">
                <Mail className="mr-2 h-5 w-5" />
                Solicitar Cotización
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Link href="tel:+56912345678">
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <div>✓ Respuesta en 24 horas</div>
            <div>✓ Cotización sin compromiso</div>
            <div>✓ Atención personalizada</div>
          </div>
        </div>
      </div>
    </section>
  )
}
