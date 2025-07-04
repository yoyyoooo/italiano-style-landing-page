
import { Heart, Award, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Amore',
      description: 'Every piece is crafted with love and attention to detail in our Italian ateliers'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest fabrics sourced from renowned Italian textile mills'
    },
    {
      icon: Sparkles,
      title: 'Timeless Design',
      description: 'Classic silhouettes with contemporary touches that never go out of style'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              The Art of <span className="text-gradient">Italian Fashion</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Born from the rich heritage of Italian fashion, Italiano celebrates the elegance 
              and sophistication that has defined Italian style for generations. Our journey began 
              in the heart of Milan, where passion for beautiful clothing meets exceptional craftsmanship.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-terracotta-100 p-3 rounded-full flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] bg-gradient-to-br from-cream-200 to-terracotta-200 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 bg-terracotta-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-playfair text-4xl">I</span>
                  </div>
                  <p className="text-terracotta-700 font-semibold text-lg">Since 1954</p>
                  <p className="text-terracotta-600">Milano, Italia</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-gold-400 rounded-full opacity-40"></div>
              <div className="absolute bottom-12 left-8 w-16 h-16 bg-cream-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-terracotta-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
