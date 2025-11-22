import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rat, CheckCircle, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function DesratizacionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Rat className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Desratización Profesional
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
                Control efectivo de roedores con métodos químicos y físicos certificados. Protección integral para su
                propiedad y salud.
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
                  Los roedores representan una seria amenaza para la salud pública y la seguridad de las estructuras.
                  Transmiten enfermedades como leptospirosis, hantavirus y salmonelosis. Además, causan daños materiales
                  al roer cables eléctricos, tuberías y estructuras, pudiendo provocar incendios y cortocircuitos. Su
                  rápida reproducción hace esencial un control profesional inmediato.
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
                    <CardTitle>Control Químico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Rodenticidas anticoagulantes de última generación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Estaciones de cebado seguras y certificadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Cebos parafinados resistentes a la humedad</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Control Físico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Trampas mecánicas de captura múltiple</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Trampas adhesivas de alta adherencia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span>Sellado de puntos de ingreso</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground text-balance">
                Nuestro Proceso de Trabajo
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Inspección Inicial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Evaluación completa de la propiedad para identificar puntos de ingreso, áreas de anidación y nivel
                      de infestación.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Plan de Acción</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Diseño de estrategia personalizada combinando métodos químicos y físicos según las necesidades
                      específicas.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>3. Implementación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Instalación de estaciones de cebado, trampas y sellado de accesos por personal certificado.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>4. Monitoreo y Seguimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Visitas periódicas para verificar efectividad, reposición de cebos y ajustes según sea necesario.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/50 py-16">
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
                  <h3 className="mb-2 text-lg font-semibold">Seguridad Garantizada</h3>
                  <p className="text-sm text-muted-foreground">Productos seguros para personas y mascotas</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Control Continuo</h3>
                  <p className="text-sm text-muted-foreground">Programas de mantenimiento preventivo</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Experiencia Comprobada</h3>
                  <p className="text-sm text-muted-foreground">Más de 20 años en control de roedores</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">¿Necesita Control de Roedores?</h2>
              <p className="mb-8 text-lg opacity-90 text-pretty">
                No espere a que el problema empeore. Solicite una inspección gratuita hoy mismo.
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
