
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Collections = () => {
  const collections = [
    {
      title: 'Primavera',
      subtitle: 'Spring Collection',
      description: 'Light, flowing fabrics in warm Italian colors',
      price: 'From €120',
      color: 'bg-cream-200'
    },
    {
      title: 'Estate',
      subtitle: 'Summer Elegance',
      description: 'Sophisticated pieces for the modern woman',
      price: 'From €150',
      color: 'bg-terracotta-200'
    },
    {
      title: 'Autunno',
      subtitle: 'Autumn Luxe',
      description: 'Rich textures and timeless silhouettes',
      price: 'From €180',
      color: 'bg-gold-200'
    }
  ];

  return (
    <section id="collections" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Le Nostre <span className="text-gradient">Collezioni</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each collection tells a story of Italian craftsmanship, where tradition meets contemporary style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.title}
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className={`${collection.color} h-64 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-playfair text-terracotta-700">
                        {collection.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-terracotta-600 font-medium mb-3">
                    {collection.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">
                      {collection.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-600 hover:text-white transition-all duration-300"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
