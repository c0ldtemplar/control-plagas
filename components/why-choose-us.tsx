import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Más de 20 años de experiencia en control de plagas",
  "Certificados por el Servicio Agrícola y Ganadero (SAG)",
  "Métodos ecológicos y respetuosos con el medio ambiente",
  "Productos de última generación y alta efectividad",
  "Personal técnico capacitado y certificado",
  "Atención personalizada y cotizaciones sin compromiso",
  "Garantía en todos nuestros servicios",
  "Cobertura residencial y comercial",
]

export function WhyChooseUs() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              ¿Por Qué Elegir Eco Control Pefyh?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              Somos una empresa líder en control integral de plagas con más de dos décadas de experiencia protegiendo
              hogares y negocios. Nuestro compromiso es brindar soluciones efectivas, seguras y ecológicas.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src="/professional-pest-control-team-with-eco-friendly-e.jpg"
                alt="Equipo profesional de Eco Control Pefyh"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-xl">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm">Satisfacción Garantizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
