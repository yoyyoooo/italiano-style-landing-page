
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="text-gradient">Eleganza</span>
              <br />
              <span className="text-foreground">Italiana</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Discover the timeless beauty of Italian fashion. From Milan's runways to your wardrobe, 
              experience luxury craftsmanship that celebrates feminine elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Our Story
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] bg-gradient-to-br from-terracotta-200 to-terracotta-300 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-terracotta-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-playfair text-2xl">I</span>
                </div>
                <p className="text-terracotta-700 font-medium">Italian Elegance</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-cream-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-gold-200 to-transparent rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gradient-to-br from-terracotta-200 to-transparent rounded-full opacity-20 blur-2xl"></div>
    </section>
  );
};

export default Hero;
