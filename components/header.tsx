"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header>
      {/* Main Header */}
      <div className="bg-[#1e5631] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white no-underline flex items-center">
              Ecoo<span className="text-[#8bc34a]">Parts</span>
            </Link>
            
            <div className="flex-grow mx-0 md:mx-8 order-3 md:order-none w-full md:w-auto mt-4 md:mt-0">
              <Input 
                type="text" 
                placeholder="Buscar repuestos..." 
                className="w-full p-2 rounded text-black"
              />
            </div>
            
            <div className="flex items-center gap-5">
              <Link href="#" className="text-white text-sm hidden md:inline">Mi Cuenta</Link>
              <Link href="#" className="text-white text-sm hidden md:inline">Pedidos</Link>
              <Link href="#" className="text-white text-sm hidden md:inline">Soporte</Link>
              <Link href="#" className="relative flex items-center justify-center bg-[#8bc34a] w-10 h-10 rounded-full">
                <i className="fas fa-shopping-cart"></i>
                <span className="absolute -top-1 -right-1 bg-[#ff5722] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
          
          <div className="mt-3">
            <Button className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-bold">
              Comprar por Categoría
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}