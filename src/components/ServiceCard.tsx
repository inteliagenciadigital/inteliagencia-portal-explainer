
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        'glass-card rounded-3xl p-8 transition-all duration-300 hover:shadow-lg relative overflow-hidden',
        isHovered ? 'transform scale-[1.02]' : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 transition-opacity duration-500" 
        style={{ opacity: isHovered ? 1 : 0 }} 
      />
      
      <div className="flex flex-col items-start">
        <div className="mb-6 rounded-2xl bg-accent/50 p-4 transition-transform duration-500" 
          style={{ transform: isHovered ? 'translateY(-5px)' : 'translateY(0)' }}
        >
          <Icon size={24} className="text-primary" />
        </div>
        
        <h3 className="text-xl font-medium mb-4 transition-transform duration-500" 
          style={{ transform: isHovered ? 'translateY(-2px)' : 'translateY(0)' }}
        >
          {title}
        </h3>
        
        <p className="text-muted-foreground transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0.9 }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
