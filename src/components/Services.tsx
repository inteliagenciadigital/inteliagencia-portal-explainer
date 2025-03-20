
import React from 'react';
import { cn } from '@/lib/utils';
import ServiceCard from './ServiceCard';
import { Code, BarChart3, Database, Wifi, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web & Mobile',
      description: 'Criamos experiências digitais responsivas e intuitivas que colocam sua marca em destaque.',
    },
    {
      icon: Database,
      title: 'Sistemas de Gestão',
      description: 'Automatize processos internos com sistemas integrados para elevação da eficiência operacional.',
    },
    {
      icon: BarChart3,
      title: 'Marketing Digital',
      description: 'Estratégias orientadas por dados para aumentar sua visibilidade e conversões online.',
    },
    {
      icon: Wifi,
      title: 'Infraestrutura Digital',
      description: 'Soluções seguras e escaláveis para garantir a continuidade e o crescimento do seu negócio.',
    },
    {
      icon: Globe,
      title: 'Presença Digital',
      description: 'Construímos e aprimoramos sua identidade online para conectar com seu público-alvo.',
    },
    {
      icon: Cpu,
      title: 'Inteligência Artificial',
      description: 'Implementamos soluções de IA para automatizar processos e oferecer insights valiosos.',
    },
  ];

  return (
    <section id="services" className={cn('py-20 md:py-32 relative overflow-hidden', className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5"
          >
            Nossos Serviços
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium mb-6 text-balance"
          >
            Soluções completas para transformação digital
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground text-balance"
          >
            Combinamos tecnologia avançada e expertise para oferecer serviços que impulsionam o crescimento e eficiência do seu negócio.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
