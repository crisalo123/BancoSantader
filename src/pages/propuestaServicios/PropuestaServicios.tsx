import { Link } from 'react-router-dom'

type ServiceItem = {
  key: string
  title: string
  description: string
  imageUrl: string
}

const services: ServiceItem[] = [
  {
    key: 'bouquets',
    title: 'Bouquets',
    description:
      'Arreglos personalizados con globos premium para sorprender en cualquier ocasión.',
    imageUrl: '/servicios/img1.png',
  },
  {
    key: 'decoracion',
    title: 'Decoración con globos',
    description:
      'Arcos, columnas y backdrops diseñados a medida para realzar tus eventos.',
    imageUrl: '/servicios/img2.png',
  },
  {
    key: 'infantiles',
    title: 'Fiestas infantiles',
    description:
      'Tematización completa con globos, mesa dulce y detalles encantadores.',
    imageUrl: '/servicios/img1.png',
  },
  {
    key: 'empresariales',
    title: 'Eventos empresariales',
    description:
      'Branding con globos para lanzamientos, ferias, activaciones y aniversarios.',
    imageUrl: '/servicios/img2.png',
  },
]

export const PropuestaServicios = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      {/* Hero minimalista */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">El mundo de los globos</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Decoración con globos elegante y memorable
              </h1>
              <p className="text-neutral-600 max-w-xl">
                Propuesta de diseño: sección de servicios con enfoque elegante, imágenes grandes
                y un bloque de contacto minimalista para cotizaciones rápidas.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  Cotizar ahora
                </a>
                <Link
                  to={"/home"}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 hover:bg-white"
                >
                  Volver al sitio
                </Link>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200">
              <img
                src="/servicios/img1.png"
                alt="Hero globos"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">Servicios</h2>
            <p className="text-neutral-600 mt-2">Diseños hechos a medida para cada ocasión.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.key}
                className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">{service.description}</p>
                  <div className="mt-5 flex gap-3">
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                    >
                      Cotizar
                    </a>
                    <button
                      className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-white"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto minimalista */}
      <section id="contacto" className="py-14 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-semibold">¿Listos para decorar su evento?</h3>
              <p className="text-neutral-600 mt-2">Escríbenos y armamos tu propuesta en minutos.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contacto@elmundo-de-los-globos.com"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-white"
              >
                Email
              </a>
              <a
                href="https://instagram.com/elmundo_de_los_globos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropuestaServicios

