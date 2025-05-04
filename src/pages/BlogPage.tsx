
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import NewsCard, { NewsItem } from '@/components/NewsCard';
import { Skeleton } from '@/components/ui/skeleton';
import Footer from '@/components/Footer';

// This would be replaced with your actual API fetching function
const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    // For demo purposes, using a free news API
    // In production, replace with your preferred news API
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=YOUR_API_KEY');
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch news');
    }
    
    // Transform the API response to match our NewsItem interface
    return data.articles.map((article: any, index: number) => ({
      id: index,
      title: article.title || 'Sem título',
      description: article.description || 'Sem descrição',
      content: article.content,
      date: article.publishedAt || new Date().toISOString(),
      image: article.urlToImage,
      url: article.url,
      source: article.source?.name
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    
    // Return mock data when the API fails or for development
    return [
      {
        id: 1,
        title: 'Inteligência Artificial revoluciona o mercado de trabalho',
        description: 'Novas tecnologias de IA estão transformando como empresas operam e criam novos cargos para profissionais qualificados.',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop'
      },
      {
        id: 2,
        title: 'Desenvolvimento web em 2025: o que esperar?',
        description: 'As tendências de desenvolvimento web para o próximo ano incluem mais aplicações de realidade aumentada e experiências imersivas.',
        date: new Date(Date.now() - 86400000).toISOString(),
        image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop'
      },
      {
        id: 3,
        title: 'Segurança cibernética: proteja sua empresa contra ataques',
        description: 'Especialistas alertam sobre o aumento de ataques cibernéticos e compartilham dicas para proteger dados empresariais.',
        date: new Date(Date.now() - 172800000).toISOString(),
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1770&auto=format&fit=crop'
      },
      {
        id: 4,
        title: 'Automação de marketing digital: implemente hoje mesmo',
        description: 'Ferramentas de automação estão ajudando empresas a aumentar conversões e melhorar relacionamento com clientes.',
        date: new Date(Date.now() - 259200000).toISOString(),
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
      },
      {
        id: 5,
        title: 'E-commerce: estratégias para aumentar vendas online',
        description: 'Descubra como otimizar sua loja virtual e aumentar a taxa de conversão com estas estratégias comprovadas.',
        date: new Date(Date.now() - 345600000).toISOString(),
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1770&auto=format&fit=crop'
      },
      {
        id: 6,
        title: 'Design responsivo: importância para SEO e experiência do usuário',
        description: 'Sites responsivos não só melhoram a experiência do usuário como também têm melhor desempenho nos resultados de busca.',
        date: new Date(Date.now() - 432000000).toISOString(),
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop'
      },
    ];
  }
};

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Novidades | Inteliagencia Digital';
  }, []);

  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  return (
    <TransitionLayout>
      <Navbar />
      <main className="pt-24 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Novidades</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fique por dentro das últimas tendências tecnológicas e novidades do setor.
            </p>
          </div>
          
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <Skeleton className="h-48 w-full rounded-xl" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-destructive mb-2">Erro ao carregar as notícias</h3>
              <p className="text-muted-foreground">Tente novamente mais tarde</p>
            </div>
          )}

          {!isLoading && news && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {news.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <NewsCard news={item} className="h-full" />
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </main>
      <Footer />
    </TransitionLayout>
  );
};

export default BlogPage;
