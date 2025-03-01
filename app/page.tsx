import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#333]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#555] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Repuestos de Calidad a Precios Accesibles</h1>
          <p className="text-lg max-w-[700px] mx-auto mb-8">
            Encuentra las piezas perfectas para tu vehículo en nuestro extenso catálogo de repuestos originales y alternativos. Envío rápido y servicio al cliente experto.
          </p>
          <Button className="bg-[#8bc34a] hover:bg-[#7cb342] text-white px-8 py-6 rounded text-lg font-bold">
            COMPRAR AHORA
          </Button>
        </div>
      </section>

      {/* Vehicle Selector */}
      <section className="relative max-w-[800px] mx-auto px-4 -mt-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-[#1e5631] text-2xl font-bold mb-6">Encuentra Repuestos Para Tu Vehículo</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 min-w-[150px]">
              <select className="w-full p-3 border border-[#ddd] rounded-md bg-white">
                <option>Seleccionar Año</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <select className="w-full p-3 border border-[#ddd] rounded-md bg-white">
                <option>Seleccionar Marca</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <select className="w-full p-3 border border-[#ddd] rounded-md bg-white">
                <option>Seleccionar Modelo</option>
                <option>Camry</option>
                <option>Accord</option>
                <option>F-150</option>
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <select className="w-full p-3 border border-[#ddd] rounded-md bg-white">
                <option>Seleccionar Motor</option>
                <option>2.0L 4-Cilindros</option>
                <option>3.5L V6</option>
                <option>5.0L V8</option>
              </select>
            </div>
            <Button className="min-w-[120px] bg-[#1e5631] hover:bg-[#164023] text-white font-bold py-3">
              Buscar Repuestos
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Explorar <span className="text-[#8bc34a]">Categorías</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="h-[180px] overflow-hidden">
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
                  <Link href="#" className="text-[#8bc34a] font-medium">
                    Ver Todo <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Productos <span className="text-[#8bc34a]">Destacados</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="border border-[#eee] rounded-lg overflow-hidden transition-shadow hover:shadow-md">
                <div className="h-[200px] overflow-hidden relative">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-[#8bc34a] text-white px-2 py-1 rounded text-xs font-bold">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <div className="flex justify-between mb-4 text-sm text-[#777]">
                    <span>{product.brand}</span>
                    <span>ID: {product.id}</span>
                  </div>
                  <div className="text-xl font-bold text-[#8bc34a] mb-4">{product.price}</div>
                  <div className="flex justify-between">
                    <Button className="flex-grow mr-2 bg-[#8bc34a] hover:bg-[#7cb342] text-white">
                      Añadir al Carrito
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                      <i className="fas fa-heart"></i>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#f9f9f9] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Cómo <span className="text-[#8bc34a]">Funciona</span></h2>
          <div className="flex flex-wrap justify-around mt-10">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 min-w-[250px] p-5 m-4">
                <div className="w-20 h-20 bg-[#8bc34a] text-white rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                  <i className={step.icon}></i>
                </div>
                <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const categories = [
  {
    title: "Partes de Motor",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    title: "Transmisión",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    title: "Frenos y Suspensión",
    image: "https://images.unsplash.com/photo-1600147131759-880e94a6e3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    title: "Carrocería",
    image: "https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
  }
];

const products = [
  {
    title: "Motor BMW Serie 3 2.0L 2018",
    brand: "BMW",
    id: "BP28765",
    price: "€1,299.99",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    badge: "Mejor Valorado"
  },
  {
    title: "Transmisión Automática Toyota Camry 2016",
    brand: "Toyota",
    id: "TP19834",
    price: "$849.99",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    badge: "Oferta"
  },
  {
    title: "Faros LED Ford F-150 (Par) 2019",
    brand: "Ford",
    id: "FP45621",
    price: "$399.99",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    title: "Llantas de Aleación Audi A4 18\" (Juego de 4) 2020",
    brand: "Audi",
    id: "AP78932",
    price: "$749.99",
    image: "https://images.unsplash.com/photo-1611921059132-d3812f97873b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    badge: "Popular"
  }
];

const steps = [
  {
    title: "Encuentra Tu Repuesto",
    icon: "fas fa-search",
    description: "Busca en nuestro extenso inventario ingresando los detalles de tu vehículo o el número de pieza para encontrar la coincidencia exacta para tu auto."
  },
  {
    title: "Realiza Tu Pedido",
    icon: "fas fa-credit-card",
    description: "Añade artículos a tu carrito y paga de forma segura. Aceptamos todas las tarjetas de crédito principales y PayPal para tu comodidad."
  },
  {
    title: "Entrega Rápida",
    icon: "fas fa-truck",
    description: "Enviamos a todo el país con seguimiento incluido. La mayoría de los pedidos se entregan en 3-5 días hábiles."
  }
];