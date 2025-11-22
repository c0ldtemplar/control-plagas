import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"

const blogPosts = {
  "prevencion-plagas-verano": {
    title: "Prevención de Plagas en Verano: Guía Completa",
    date: "15 de Enero, 2025",
    readTime: "5 min",
    category: "Prevención",
    image: "/summer-pest-prevention.jpg",
    content: `
      <p>El verano es la temporada más activa para las plagas. Las altas temperaturas y la humedad crean el ambiente perfecto para que insectos y roedores proliferen. En este artículo, le proporcionamos una guía completa para mantener su hogar protegido durante los meses más cálidos.</p>

      <h2>¿Por qué aumentan las plagas en verano?</h2>
      <p>Durante el verano, varios factores contribuyen al aumento de la actividad de plagas:</p>
      <ul>
        <li><strong>Temperaturas elevadas:</strong> Aceleran el ciclo de vida de los insectos, permitiendo una reproducción más rápida.</li>
        <li><strong>Mayor humedad:</strong> Crea condiciones ideales para mosquitos, cucarachas y otros insectos.</li>
        <li><strong>Disponibilidad de alimentos:</strong> Las frutas maduras y los residuos atraen moscas y hormigas.</li>
        <li><strong>Actividad humana:</strong> Más tiempo al aire libre significa más puertas y ventanas abiertas.</li>
      </ul>

      <h2>Medidas preventivas esenciales</h2>
      
      <h3>1. Mantenga la limpieza rigurosa</h3>
      <p>La limpieza es su primera línea de defensa contra las plagas. Asegúrese de:</p>
      <ul>
        <li>Limpiar derrames inmediatamente</li>
        <li>No dejar platos sucios durante la noche</li>
        <li>Vaciar los cestos de basura diariamente</li>
        <li>Limpiar debajo de electrodomésticos regularmente</li>
      </ul>

      <h3>2. Elimine fuentes de agua</h3>
      <p>El agua estancada atrae mosquitos y otros insectos. Revise y elimine:</p>
      <ul>
        <li>Agua acumulada en macetas y platos</li>
        <li>Canaletas obstruidas</li>
        <li>Piscinas inflables sin uso</li>
        <li>Cualquier recipiente que pueda acumular agua de lluvia</li>
      </ul>

      <h3>3. Selle puntos de entrada</h3>
      <p>Inspeccione su hogar en busca de grietas y aberturas:</p>
      <ul>
        <li>Revise marcos de puertas y ventanas</li>
        <li>Selle grietas en paredes y cimientos</li>
        <li>Instale burletes en puertas</li>
        <li>Coloque mallas mosquiteras en ventanas</li>
      </ul>

      <h3>4. Almacenamiento adecuado de alimentos</h3>
      <p>Los alimentos mal almacenados son un imán para las plagas:</p>
      <ul>
        <li>Use contenedores herméticos para alimentos secos</li>
        <li>Refrigere frutas maduras</li>
        <li>No deje comida de mascotas expuesta</li>
        <li>Limpie la despensa regularmente</li>
      </ul>

      <h2>Mantenimiento del jardín</h2>
      <p>El exterior de su hogar también requiere atención:</p>
      <ul>
        <li>Mantenga el césped corto</li>
        <li>Pode arbustos y árboles alejados de la casa</li>
        <li>Elimine hojas caídas y escombros</li>
        <li>Almacene leña lejos de la vivienda</li>
      </ul>

      <h2>Cuándo llamar a un profesional</h2>
      <p>Si nota signos de infestación a pesar de sus esfuerzos preventivos, es momento de contactar a un profesional. Las señales incluyen:</p>
      <ul>
        <li>Avistamiento frecuente de plagas</li>
        <li>Excrementos o rastros de roedores</li>
        <li>Daños en estructuras o alimentos</li>
        <li>Picaduras o reacciones alérgicas</li>
      </ul>

      <h2>Conclusión</h2>
      <p>La prevención es la clave para mantener su hogar libre de plagas durante el verano. Con estas medidas simples pero efectivas, puede disfrutar de la temporada sin preocupaciones. Recuerde que la intervención temprana es siempre más efectiva y económica que tratar una infestación establecida.</p>
    `,
  },
  "senales-infestacion-roedores": {
    title: "5 Señales de que Tiene una Infestación de Roedores",
    date: "8 de Enero, 2025",
    readTime: "4 min",
    category: "Identificación",
    image: "/rodent-infestation-signs.jpg",
    content: `
      <p>Los roedores son plagas sigilosas que pueden causar daños significativos antes de que se note su presencia. Identificar una infestación tempranamente es crucial para minimizar los riesgos para la salud y los daños materiales. Aquí están las cinco señales más comunes de una infestación de roedores.</p>

      <h2>1. Excrementos y manchas de orina</h2>
      <p>Los excrementos de roedores son una de las señales más evidentes de su presencia:</p>
      <ul>
        <li><strong>Ratones:</strong> Excrementos pequeños (3-6mm), oscuros y puntiagudos en los extremos</li>
        <li><strong>Ratas:</strong> Excrementos más grandes (12-18mm), cilíndricos con extremos romos</li>
        <li><strong>Ubicación:</strong> Busque en despensas, debajo de fregaderos, en rincones y a lo largo de paredes</li>
      </ul>
      <p>Las manchas de orina aparecen como rastros oscuros bajo luz UV y tienen un olor característico a amoníaco.</p>

      <h2>2. Ruidos nocturnos</h2>
      <p>Los roedores son principalmente nocturnos, por lo que los ruidos durante la noche son una señal clara:</p>
      <ul>
        <li>Rasguños en paredes o techos</li>
        <li>Sonidos de carrera en el ático o entre paredes</li>
        <li>Chirridos o chillidos</li>
        <li>Ruidos de roer o masticar</li>
      </ul>
      <p>Si escucha estos sonidos regularmente, especialmente entre las 11 PM y las 5 AM, probablemente tenga roedores.</p>

      <h2>3. Marcas de roído y daños</h2>
      <p>Los roedores necesitan roer constantemente para mantener sus dientes cortos:</p>
      <ul>
        <li><strong>Cables eléctricos:</strong> Pueden causar cortocircuitos e incendios</li>
        <li><strong>Empaques de alimentos:</strong> Bolsas y cajas mordidas</li>
        <li><strong>Madera:</strong> Marcos de puertas, muebles y estructuras</li>
        <li><strong>Tuberías:</strong> Pueden causar fugas de agua</li>
      </ul>
      <p>Las marcas de roído frescas son de color claro, mientras que las antiguas se oscurecen con el tiempo.</p>

      <h2>4. Nidos y madrigueras</h2>
      <p>Los roedores construyen nidos con materiales blandos que encuentran:</p>
      <ul>
        <li>Papel triturado, cartón o tela</li>
        <li>Aislamiento térmico desgarrado</li>
        <li>Materiales vegetales secos</li>
      </ul>
      <p>Busque nidos en lugares oscuros y protegidos como:</p>
      <ul>
        <li>Detrás de electrodomésticos</li>
        <li>En áticos y sótanos</li>
        <li>Dentro de cajas almacenadas</li>
        <li>En espacios entre paredes</li>
      </ul>

      <h2>5. Huellas y rastros de grasa</h2>
      <p>Los roedores dejan rastros visibles de su actividad:</p>
      <ul>
        <li><strong>Huellas:</strong> Visibles en polvo o superficies sucias, con cuatro dedos adelante y cinco atrás</li>
        <li><strong>Marcas de grasa:</strong> Manchas oscuras a lo largo de paredes y zócalos donde frotan su pelaje</li>
        <li><strong>Senderos:</strong> Caminos visibles en el polvo o vegetación exterior</li>
      </ul>
      <p>Para detectar huellas, espolvoree talco o harina en áreas sospechosas durante la noche.</p>

      <h2>Señales adicionales de alerta</h2>
      <p>Otras indicaciones de una posible infestación incluyen:</p>
      <ul>
        <li>Mascotas que actúan de manera inusual, mirando fijamente paredes o rincones</li>
        <li>Olor a amoníaco o moho en áreas cerradas</li>
        <li>Avistamiento directo de roedores, especialmente durante el día (indica infestación severa)</li>
        <li>Plantas de jardín dañadas o bulbos desenterrados</li>
      </ul>

      <h2>¿Qué hacer si detecta estas señales?</h2>
      <p>Si identifica una o más de estas señales, es importante actuar rápidamente:</p>
      <ol>
        <li><strong>No ignore el problema:</strong> Las infestaciones empeoran rápidamente</li>
        <li><strong>Documente la evidencia:</strong> Tome fotos de excrementos, daños y otras señales</li>
        <li><strong>Contacte a un profesional:</strong> El control efectivo requiere experiencia y productos especializados</li>
        <li><strong>Implemente medidas preventivas:</strong> Selle puntos de entrada y elimine fuentes de alimento</li>
      </ol>

      <h2>Conclusión</h2>
      <p>La detección temprana es fundamental para controlar una infestación de roedores antes de que cause daños graves o riesgos para la salud. Si nota cualquiera de estas señales, no espere: contacte a un profesional en control de plagas inmediatamente. En Eco Control Pefyh, ofrecemos inspecciones gratuitas y soluciones efectivas para eliminar roedores de su propiedad.</p>
    `,
  },
  "control-plagas-ecologico": {
    title: "Control de Plagas Ecológico: Mitos y Realidades",
    date: "2 de Enero, 2025",
    readTime: "6 min",
    category: "Educación",
    image: "/ecological-pest-control.jpg",
    content: `
      <p>El control ecológico de plagas ha ganado popularidad en los últimos años, pero también ha generado muchos mitos y malentendidos. En este artículo, desmitificamos las creencias comunes y explicamos cómo funciona realmente el control de plagas respetuoso con el medio ambiente.</p>

      <h2>¿Qué es el control ecológico de plagas?</h2>
      <p>El control ecológico, también conocido como Manejo Integrado de Plagas (MIP), es un enfoque que combina múltiples estrategias para controlar plagas de manera efectiva mientras minimiza el impacto ambiental. No significa eliminar completamente el uso de productos químicos, sino usarlos de manera inteligente y como último recurso.</p>

      <h2>Mito 1: "Los métodos ecológicos no son efectivos"</h2>
      <h3>Realidad:</h3>
      <p>Los métodos ecológicos pueden ser igual o más efectivos que los tratamientos químicos tradicionales cuando se aplican correctamente. La clave está en:</p>
      <ul>
        <li>Identificación precisa de la plaga</li>
        <li>Comprensión del ciclo de vida del organismo</li>
        <li>Aplicación de múltiples estrategias coordinadas</li>
        <li>Monitoreo continuo y ajustes según sea necesario</li>
      </ul>
      <p>De hecho, muchas plagas han desarrollado resistencia a pesticidas químicos, haciendo que los métodos alternativos sean más efectivos a largo plazo.</p>

      <h2>Mito 2: "Ecológico significa usar solo productos naturales"</h2>
      <h3>Realidad:</h3>
      <p>El control ecológico no se trata solo de usar productos "naturales". Incluye:</p>
      <ul>
        <li><strong>Prevención:</strong> Modificación del ambiente para hacerlo menos atractivo para plagas</li>
        <li><strong>Exclusión física:</strong> Barreras, trampas y sellado de entradas</li>
        <li><strong>Control biológico:</strong> Uso de depredadores naturales</li>
        <li><strong>Productos de bajo impacto:</strong> Químicos específicos que afectan solo a la plaga objetivo</li>
      </ul>
      <p>Además, "natural" no siempre significa "seguro". Algunos productos naturales pueden ser tóxicos para humanos y mascotas.</p>

      <h2>Mito 3: "Es más caro que los métodos tradicionales"</h2>
      <h3>Realidad:</h3>
      <p>Aunque el costo inicial puede ser similar o ligeramente mayor, el control ecológico suele ser más económico a largo plazo porque:</p>
      <ul>
        <li>Reduce la necesidad de tratamientos repetidos</li>
        <li>Previene daños estructurales costosos</li>
        <li>Minimiza riesgos para la salud que podrían generar gastos médicos</li>
        <li>Aumenta la efectividad con el tiempo en lugar de disminuirla</li>
      </ul>

      <h2>Mito 4: "Toma mucho más tiempo ver resultados"</h2>
      <h3>Realidad:</h3>
      <p>El tiempo para ver resultados depende del tipo de plaga y la severidad de la infestación, no del método usado. En algunos casos:</p>
      <ul>
        <li>Las trampas físicas pueden dar resultados inmediatos</li>
        <li>Los productos de bajo impacto actúan tan rápido como los tradicionales</li>
        <li>La prevención puede eliminar problemas antes de que comiencen</li>
      </ul>
      <p>Lo que sí es cierto es que el control ecológico busca soluciones duraderas, no solo alivio temporal.</p>

      <h2>Componentes del control ecológico efectivo</h2>

      <h3>1. Inspección y monitoreo</h3>
      <p>Una evaluación exhaustiva identifica:</p>
      <ul>
        <li>Tipo y cantidad de plagas presentes</li>
        <li>Puntos de entrada y áreas de anidación</li>
        <li>Factores que atraen o favorecen las plagas</li>
        <li>Nivel de daño existente</li>
      </ul>

      <h3>2. Modificación del hábitat</h3>
      <p>Hacer el ambiente menos hospitalario para las plagas:</p>
      <ul>
        <li>Eliminar fuentes de agua y alimento</li>
        <li>Mejorar la ventilación y reducir humedad</li>
        <li>Mantener limpieza rigurosa</li>
        <li>Modificar paisajismo exterior</li>
      </ul>

      <h3>3. Exclusión física</h3>
      <p>Prevenir el acceso de plagas:</p>
      <ul>
        <li>Sellar grietas y aberturas</li>
        <li>Instalar mallas y barreras</li>
        <li>Usar puertas y ventanas herméticas</li>
        <li>Implementar sistemas de exclusión específicos</li>
      </ul>

      <h3>4. Control biológico</h3>
      <p>Aprovechar enemigos naturales de las plagas:</p>
      <ul>
        <li>Introducción de depredadores beneficiosos</li>
        <li>Uso de patógenos específicos</li>
        <li>Feromonas para interrumpir reproducción</li>
      </ul>

      <h3>5. Productos de bajo impacto</h3>
      <p>Cuando sea necesario, usar productos que:</p>
      <ul>
        <li>Sean específicos para la plaga objetivo</li>
        <li>Tengan baja toxicidad para humanos y mascotas</li>
        <li>Se degraden rápidamente en el ambiente</li>
        <li>No dejen residuos persistentes</li>
      </ul>

      <h2>Beneficios reales del control ecológico</h2>
      <ul>
        <li><strong>Salud:</strong> Menor exposición a químicos tóxicos</li>
        <li><strong>Ambiente:</strong> Protección de organismos beneficiosos</li>
        <li><strong>Efectividad:</strong> Soluciones duraderas en lugar de temporales</li>
        <li><strong>Economía:</strong> Menor costo a largo plazo</li>
        <li><strong>Sostenibilidad:</strong> Previene desarrollo de resistencia</li>
      </ul>

      <h2>Conclusión</h2>
      <p>El control ecológico de plagas no es una moda pasajera ni un compromiso en efectividad. Es un enfoque científico, integral y sostenible que protege tanto su propiedad como el medio ambiente. En Eco Control Pefyh, combinamos lo mejor de los métodos tradicionales y ecológicos para ofrecer soluciones efectivas, seguras y duraderas.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[400px] w-full overflow-hidden bg-muted">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Back Button */}
              <Button asChild variant="ghost" className="mb-8">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Blog
                </Link>
              </Button>

              {/* Article Header */}
              <header className="mb-12">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} de lectura</span>
                  </div>
                </div>

                <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between border-y py-4">
                  <div className="text-sm text-muted-foreground">Escrito por el equipo de Eco Control Pefyh</div>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartir
                  </Button>
                </div>
              </header>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:text-muted-foreground prose-ul:my-6 prose-li:my-2 prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author CTA */}
              <Card className="mt-12 border-2 bg-muted/50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="mb-4 text-2xl font-bold text-foreground">¿Necesita Ayuda Profesional?</h3>
                    <p className="mb-6 text-muted-foreground">
                      Nuestro equipo de expertos está listo para ayudarle con cualquier problema de plagas.
                    </p>
                    <Button asChild size="lg">
                      <Link href="/contacto">Solicitar Cotización Gratuita</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
