
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NewsItem {
  id: string | number;
  title: string;
  description: string;
  content?: string;
  date: string;
  image?: string;
  url?: string;
  source?: string;
}

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
  const formattedDate = news.date ? new Date(news.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : '';

  return (
    <Card className={cn("h-full flex flex-col overflow-hidden transition-all hover:shadow-md", className)}>
      {news.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2 hover:text-primary transition-colors">{news.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{news.description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        {news.url && (
          <Button variant="outline" className="w-full" onClick={() => window.open(news.url, '_blank')}>
            Leia mais
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
