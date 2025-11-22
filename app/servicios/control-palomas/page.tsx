import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bird, CheckCircle, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ControlPalomasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Bird className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Control de Palomas
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
                Métodos certificados y ecológicos para el control de aves urbanas sin uso de tóxicos. Protegemos su
                propiedad de manera efectiva y responsable.
              </p>
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-foreground text-balance">¿Por qué es importante?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Las palomas urbanas pueden causar daños significativos a edificios, monumentos y espacios públicos.
                  Sus excrementos son corrosivos y pueden transmitir enfermedades como histoplasmosis, criptococosis y
                  salmonelosis. Además, sus nidos obstruyen canaletas y sistemas de ventilación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground text-balance">
                Nuestros Métodos de Control
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Sistemas de Exclusión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Instalación de pinchos anti-posamiento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Redes de protección certificadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Sistemas de cables tensados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métodos Ecológicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Repelentes visuales y sonoros</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Gel repelente no tóxico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Limpieza y desinfección de áreas afectadas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground text-balance">
                Beneficios de Nuestro Servicio
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Métodos Seguros</h3>
                  <p className="text-sm text-muted-foreground">Sin uso de tóxicos ni daño al medio ambiente</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Resultados Duraderos</h3>
                  <p className="text-sm text-muted-foreground">Soluciones permanentes con garantía</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Certificación</h3>
                  <p className="text-sm text-muted-foreground">Personal capacitado y certificado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">¿Necesita Control de Palomas?</h2>
              <p className="mb-8 text-lg opacity-90 text-pretty">
                Solicite una inspección gratuita y reciba una cotización personalizada para su propiedad.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/servicios">Ver Otros Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
