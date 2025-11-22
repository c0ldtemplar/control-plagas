import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    slug: "prevencion-plagas-verano",
    title: "Prevención de Plagas en Verano: Guía Completa",
    excerpt:
      "El verano trae consigo un aumento en la actividad de insectos y roedores. Aprenda cómo proteger su hogar durante los meses más cálidos.",
    date: "15 de Enero, 2025",
    readTime: "5 min",
    category: "Prevención",
    image: "/summer-pest-prevention.jpg",
  },
  {
    slug: "senales-infestacion-roedores",
    title: "5 Señales de que Tiene una Infestación de Roedores",
    excerpt:
      "Identificar tempranamente una infestación de roedores puede ahorrarle tiempo y dinero. Conozca las señales de advertencia más comunes.",
    date: "8 de Enero, 2025",
    readTime: "4 min",
    category: "Identificación",
    image: "/rodent-infestation-signs.jpg",
  },
  {
    slug: "control-plagas-ecologico",
    title: "Control de Plagas Ecológico: Mitos y Realidades",
    excerpt: "Desmitificamos las creencias sobre el control ecológico de plagas y explicamos cómo funciona realmente.",
    date: "2 de Enero, 2025",
    readTime: "6 min",
    category: "Educación",
    image: "/ecological-pest-control.jpg",
  },
  {
    slug: "importancia-sanitizacion-covid",
    title: "La Importancia de la Sanitización Post-COVID",
    excerpt:
      "Cómo la sanitización profesional se ha vuelto esencial para mantener espacios seguros y saludables en la nueva normalidad.",
    date: "28 de Diciembre, 2024",
    readTime: "5 min",
    category: "Sanitización",
    image: "/professional-sanitization-covid.jpg",
  },
  {
    slug: "cucarachas-cocina-eliminar",
    title: "Cómo Eliminar Cucarachas de la Cocina Definitivamente",
    excerpt:
      "Las cucarachas en la cocina son un problema común pero solucionable. Descubra métodos efectivos para eliminarlas.",
    date: "20 de Diciembre, 2024",
    readTime: "7 min",
    category: "Soluciones",
    image: "/cockroaches-kitchen-elimination.jpg",
  },
  {
    slug: "control-palomas-edificios",
    title: "Control de Palomas en Edificios: Métodos Efectivos",
    excerpt:
      "Las palomas pueden causar daños significativos a edificios. Conozca los métodos más efectivos para controlarlas sin dañarlas.",
    date: "15 de Diciembre, 2024",
    readTime: "6 min",
    category: "Control de Aves",
    image: "/pigeon-control-buildings.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Blog de Control de Plagas
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
                Consejos, guías y noticias sobre control de plagas, prevención y mantenimiento de espacios saludables.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-video w-full overflow-hidden bg-muted">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/blog/${post.slug}`}>
                            Leer más <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">¿Necesita Ayuda Profesional?</h2>
              <p className="mb-8 text-lg text-muted-foreground text-pretty">
                No deje que las plagas afecten su calidad de vida. Contáctenos para una solución profesional.
              </p>
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar Cotización Gratuita</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
