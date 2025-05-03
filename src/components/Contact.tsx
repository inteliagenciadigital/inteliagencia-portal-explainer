
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso!', {
        description: 'Entraremos em contato em breve.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@inteliagencia.com',
      href: 'mailto:contato@inteliagencia.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (11) 9999-8888',
      href: 'tel:+551199998888',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Av. Paulista, 1000 - São Paulo, SP',
      href: 'https://maps.google.com/?q=Av.+Paulista,+1000,+São+Paulo,+SP',
    },
  ];

  return (
    <section id="contact" className={cn('py-20 md:py-32 relative', className)}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5"
          >
            Contato
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium mb-6 text-balance"
          >
            Vamos construir algo incrível juntos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground text-balance"
          >
            Entre em contato para discutir seu projeto ou tirar dúvidas. Estamos ansiosos para transformar suas ideias em realidade.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/50 dark:border-slate-800/50"
          >
            <h3 className="text-2xl font-medium mb-8">
              Envie-nos uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                  className="rounded-xl h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  required
                  className="rounded-xl h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Digite seu telefone"
                  className="rounded-xl h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  required
                  className="min-h-[150px] rounded-xl"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl h-12 bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </form>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-medium mb-6">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start p-5 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-primary/10 p-3 rounded-xl mr-4">
                      <item.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-primary/5 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-primary/10"
            >
              <h3 className="text-xl font-medium mb-4">
                Horário de atendimento
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Estamos disponíveis para atendê-lo nos seguintes horários:
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Segunda - Sexta</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sábado</span>
                  <span className="font-medium">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Domingo</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
