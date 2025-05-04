import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer } from 'lucide-react';
interface HeroProps {
  className?: string;
}
const Hero: React.FC<HeroProps> = ({
  className
}) => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // URL do WhatsApp
  const whatsappUrl = "https://wa.me/5511954001013";
  return <section id="hero" className={cn('relative overflow-hidden min-h-[90vh] flex items-center', className)}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }} className="mb-6">
            
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              Transformação Digital
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-balance mb-6">
            Elevando o potencial do seu negócio com{' '}
            <span className="text-primary">Inteliagencia Digital</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-10 text-balance">
            A Inteliagencia Digital oferece soluções tecnológicas personalizadas que impulsionam o crescimento do seu negócio, automatizando processos e melhorando a experiência do cliente.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg group" onClick={scrollToServices}>
              Conheça nossos serviços
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-slate-200 hover:bg-slate-100 transition-all duration-300" onClick={() => window.open(whatsappUrl, "_blank")}>
              Fale conosco
            </Button>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.2
      }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Role para descobrir</span>
          <MousePointer size={20} className="animate-bounce text-primary" />
        </motion.div>
      </div>
    </section>;
};
export default Hero;