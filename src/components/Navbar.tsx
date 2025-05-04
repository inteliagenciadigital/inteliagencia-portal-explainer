
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // URL do WhatsApp
  const whatsappUrl = "https://wa.me/5511954001013";

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center',
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/c4781fe0-c5da-451b-8154-680a5e5572e2.png" 
            alt="Inteliagencia Digital Logo" 
            className="w-12 h-12 object-contain"
          />
          <a
            href="#"
            className="text-2xl font-display font-semibold text-foreground transition-opacity hover:opacity-80"
          >
            Inteliagencia Digital
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="bg-[#304FFE] hover:bg-[#304FFE]/90 text-white rounded-lg px-6 py-2"
          >
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'absolute top-20 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md transition-all duration-300 transform md:hidden overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="py-2 text-foreground/80 hover:text-foreground font-medium text-lg transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="bg-[#304FFE] hover:bg-[#304FFE]/90 text-white w-full mt-4"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
