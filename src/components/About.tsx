
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const features = [
    'Equipe experiente e especializada',
    'Metodologias ágeis de desenvolvimento',
    'Compromisso com inovação contínua',
    'Atendimento personalizado',
    'Suporte técnico dedicado',
    'Soluções escaláveis e adaptáveis',
  ];

  return (
    <section id="about" className={cn('py-20 md:py-32 bg-accent/50', className)}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              Sobre Nós
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-balance">
              Impulsionando negócios através da tecnologia
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              A Inteliagencia Digital nasceu da paixão por transformar ideias em soluções tecnológicas que geram resultados reais. Há mais de 5 anos, temos ajudado empresas de diversos segmentos a otimizar seus processos e expandir sua presença digital.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 text-balance">
              Nossa missão é democratizar o acesso à tecnologia de ponta, tornando soluções avançadas acessíveis a empresas de todos os portes, sempre com foco em resultados mensuráveis e crescimento sustentável.
            </p>
            
            <Button
              className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg group"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Conheça nossa equipe
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/50 dark:border-slate-800/50"
          >
            <h3 className="text-2xl font-medium mb-8">
              Por que escolher a Inteliagencia Digital?
            </h3>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 size={22} className="text-primary shrink-0 mr-3 mt-0.5" />
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-4 sm:mb-0">
                  <p className="text-muted-foreground mb-1">Prontos para começar?</p>
                  <p className="text-lg font-medium">Entre em contato hoje mesmo</p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 text-sm border-slate-200 hover:bg-slate-100 transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Fale conosco
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
