import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#222] text-[#f5f5f5] pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Column */}
          <div>
            <h3 className="text-2xl mb-6 pb-4 relative text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-[#8bc34a]">
              Sobre EcooParts
            </h3>
            <p className="mb-5 text-[#bbb] text-sm leading-7">
              Somos un proveedor líder de repuestos de automóviles usados de calidad, ayudando a los clientes a encontrar soluciones asequibles para sus necesidades de reparación y mantenimiento de vehículos.
            </p>
            <p className="mb-5 text-[#bbb] text-sm leading-7">
              Nuestro extenso inventario incluye piezas para todas las marcas y modelos principales, probadas minuciosamente y garantizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl mb-6 pb-4 relative text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-[#8bc34a]">
              Enlaces Rápidos
            </h3>
            <ul className="list-none">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-4 transition-transform hover:translate-x-1">
                  <Link href={link.url} className="text-[#bbb] no-underline transition-colors hover:text-[#8bc34a] flex items-center">
                    <i className="fas fa-chevron-right text-[#8bc34a] mr-2"></i> {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6 pb-4 relative text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-[#8bc34a]">
              Información de Contacto
            </h3>
            <ul className="list-none">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start mb-5 text-[#bbb]">
                  <i className={`${item.icon} text-[#8bc34a] mr-4 mt-1 text-lg`}></i>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl mb-6 pb-4 relative text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-[#8bc34a]">
              Boletín Informativo
            </h3>
            <div className="bg-[#333] rounded-lg p-6 shadow-lg">
              <p className="text-[#bbb] mb-5">Suscríbete a nuestro boletín para recibir actualizaciones y ofertas especiales.</p>
              <div className="flex flex-wrap gap-2 mt-5">
                <Input 
                  type="email" 
                  placeholder="Tu Correo Electrónico" 
                  className="flex-1 min-w-[200px] h-10 px-4 bg-[#444] border-none text-white placeholder:text-[#999] focus:bg-[#555]"
                />
                <Button className="h-10 bg-[#8bc34a] hover:bg-[#7cb342] text-white font-bold whitespace-nowrap">
                  Suscribirse
                </Button>
              </div>
              <div className="flex gap-4 mt-6">
                {socialIcons.map((icon, index) => (
                  <Link 
                    key={index} 
                    href="#" 
                    className="flex items-center justify-center w-10 h-10 bg-[#444] text-white rounded-full transition-all hover:bg-[#8bc34a] hover:-translate-y-1"
                  >
                    <i className={icon}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1a1a1a] py-5 text-center text-sm text-[#888] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <p>
            &copy; 2025 EcooParts. Todos los Derechos Reservados. | 
            <Link href="#" className="text-[#8bc34a] ml-1 mr-1">Política de Privacidad</Link> | 
            <Link href="#" className="text-[#8bc34a] ml-1">Términos de Servicio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

const quickLinks = [
  { text: "Inicio", url: "/" },
  { text: "Tienda", url: "#" },
  { text: "Mi Cuenta", url: "#" },
  { text: "Seguimiento de Pedido", url: "#" },
  { text: "Soporte", url: "#" },
  { text: "Contáctanos", url: "#" },
];

const contactInfo = [
  { icon: "fas fa-map-marker-alt", text: "Calle Repuestos Auto 123, Ciudad, Estado 12345" },
  { icon: "fas fa-phone", text: "+1 (234) 567-890" },
  { icon: "fas fa-envelope", text: "info@ecooparts.com" },
  { icon: "fas fa-clock", text: "Lun-Vie: 8AM-6PM, Sáb: 9AM-4PM" },
];

const socialIcons = [
  "fab fa-facebook-f",
  "fab fa-twitter",
  "fab fa-instagram",
  "fab fa-youtube",
  "fab fa-linkedin-in",
];