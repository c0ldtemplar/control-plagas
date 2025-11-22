import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bird, BugOff, Rat, Sparkles, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Bird,
    title: "Control de Palomas",
    description: "Métodos certificados y ecológicos para el control de aves urbanas sin uso de tóxicos.",
    href: "/servicios/control-palomas",
  },
  {
    icon: Shield,
    title: "Control de Murciélagos",
    description: "Erradicación segura y sellado de accesos respetando la importancia ecológica.",
    href: "/servicios/control-murcielagos",
  },
  {
    icon: Sparkles,
    title: "Sanitización",
    description: "Desinfección profesional con amonios cuaternarios de última generación.",
    href: "/servicios/sanitizacion",
  },
  {
    icon: Rat,
    title: "Desratización",
    description: "Control efectivo de roedores con métodos químicos y físicos certificados.",
    href: "/servicios/desratizacion",
  },
  {
    icon: BugOff,
    title: "Desinsectación",
    description: "Eliminación de insectos rastreros y voladores con productos de última generación.",
    href: "/servicios/desinsectacion",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Nuestros Servicios Profesionales
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Soluciones integrales para el control de plagas con más de 20 años de experiencia y certificaciones
            vigentes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={service.href}>Más Información →</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
