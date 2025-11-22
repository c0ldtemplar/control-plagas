import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Shield, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Sobre Eco Control Pefyh
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
                Más de 20 años protegiendo hogares y empresas con soluciones profesionales de control de plagas.
                Comprometidos con la excelencia y la satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground">Nuestra Misión</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Proporcionar servicios de control integral de plagas de la más alta calidad, utilizando métodos
                      seguros y efectivos que protejan la salud de nuestros clientes y el medio ambiente. Nos
                      comprometemos a superar las expectativas mediante la innovación constante y el profesionalismo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground">Nuestra Visión</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser la empresa líder en control de plagas reconocida por nuestra excelencia operativa, compromiso
                      con la sostenibilidad y la satisfacción total de nuestros clientes. Aspiramos a establecer nuevos
                      estándares en la industria del manejo integrado de plagas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground text-balance">Nuestra Historia</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Eco Control Pefyh nació hace más de dos décadas con una visión clara: ofrecer soluciones de control de
                  plagas que fueran efectivas, seguras y respetuosas con el medio ambiente. Desde nuestros inicios,
                  hemos mantenido un compromiso inquebrantable con la calidad y la innovación.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A lo largo de los años, hemos crecido y evolucionado, incorporando las últimas tecnologías y métodos
                  en el control de plagas. Nuestro equipo de profesionales certificados se mantiene en constante
                  capacitación para ofrecer los mejores servicios del mercado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hoy, somos una empresa consolidada que atiende tanto a clientes residenciales como comerciales e
                  industriales, siempre con el mismo compromiso de excelencia que nos caracterizó desde el primer día.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground text-balance">Nuestros Valores</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Seguridad</h3>
                    <p className="text-sm text-muted-foreground">
                      Priorizamos la seguridad de nuestros clientes, empleados y el medio ambiente
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Excelencia</h3>
                    <p className="text-sm text-muted-foreground">
                      Buscamos la perfección en cada servicio que brindamos
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Compromiso</h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicación total a la satisfacción de nuestros clientes
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Integridad</h3>
                    <p className="text-sm text-muted-foreground">
                      Honestidad y transparencia en todas nuestras operaciones
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground text-balance">
                Certificaciones y Garantías
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Personal Certificado</h3>
                    <p className="text-sm text-muted-foreground">
                      Todos nuestros técnicos cuentan con certificaciones vigentes en manejo de plagas
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Productos Aprobados</h3>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos únicamente productos certificados por autoridades sanitarias
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Garantía de Servicio</h3>
                    <p className="text-sm text-muted-foreground">
                      Respaldamos nuestro trabajo con garantías escritas y seguimiento
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">¿Listo para Trabajar con Nosotros?</h2>
              <p className="mb-8 text-lg opacity-90 text-pretty">
                Únase a los miles de clientes satisfechos que confían en Eco Control Pefyh para proteger sus espacios.
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
                  <Link href="/servicios">Ver Servicios</Link>
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
