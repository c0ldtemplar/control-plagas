import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">ECP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight text-foreground">Eco Control Pefyh</span>
                <span className="text-xs text-muted-foreground">Control de Plagas</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Más de 20 años protegiendo hogares y empresas con soluciones profesionales de control integral de plagas.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/control-palomas"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Control de Palomas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/control-murcielagos"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Control de Murciélagos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/sanitizacion"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Sanitización
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/desratizacion"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Desratización
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/desinsectacion"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Desinsectación
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/nosotros" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Todos los Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Solicitar Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <div>+54 11 1234-5678</div>
                  <div>+54 11 8765-4321</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@ecocontrolpefyh.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  info@ecocontrolpefyh.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  Av. Corrientes 1234
                  <br />
                  C1043 CABA, Buenos Aires
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <p className="mb-2 text-xs text-muted-foreground">Horario de Atención:</p>
              <p className="text-sm text-muted-foreground">Lun-Vie: 8:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Sáb: 9:00 - 13:00</p>
              <p className="text-sm font-semibold text-primary">Emergencias 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-md">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Suscríbase a Nuestro Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Reciba consejos, promociones y noticias sobre control de plagas.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <Input type="email" placeholder="Su email" className="flex-1" />
              <Button type="submit">Suscribirse</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} Eco Control Pefyh. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacidad" className="transition-colors hover:text-primary">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="transition-colors hover:text-primary">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
