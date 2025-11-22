import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Contáctenos
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
                Estamos aquí para ayudarle. Solicite una cotización gratuita o consulte sobre nuestros servicios de
                control de plagas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <h2 className="mb-6 text-2xl font-bold text-foreground">Información de Contacto</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Nuestro equipo está listo para atenderle. Contáctenos por cualquiera de estos medios.
                    </p>
                  </div>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">Teléfono</h3>
                          <p className="text-sm text-muted-foreground">+54 11 1234-5678</p>
                          <p className="text-sm text-muted-foreground">+54 11 8765-4321</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">Email</h3>
                          <p className="text-sm text-muted-foreground">info@ecocontrolpefyh.com</p>
                          <p className="text-sm text-muted-foreground">ventas@ecocontrolpefyh.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">Dirección</h3>
                          <p className="text-sm text-muted-foreground">
                            Av. Corrientes 1234
                            <br />
                            C1043 CABA, Buenos Aires
                            <br />
                            Argentina
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">Horario de Atención</h3>
                          <p className="text-sm text-muted-foreground">
                            Lunes a Viernes: 8:00 - 18:00
                            <br />
                            Sábados: 9:00 - 13:00
                            <br />
                            Emergencias 24/7
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="mb-6 text-2xl font-bold text-foreground">Solicitar Cotización</h2>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground text-balance">Nuestra Ubicación</h2>
              <div className="overflow-hidden rounded-lg border bg-muted">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878735845!2d-58.38375908477058!3d-34.60373098045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf7e1f4f2f%3A0x2e8b3f3b3f3b3f3b!2sAv.%20Corrientes%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Eco Control Pefyh"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
