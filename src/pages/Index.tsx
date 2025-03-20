
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Inteliagencia Digital | Soluções Tecnológicas';
  }, []);

  return (
    <TransitionLayout>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </motion.div>
    </TransitionLayout>
  );
};

export default Index;
