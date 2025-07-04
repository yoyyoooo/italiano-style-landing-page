
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Grazie!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <Mail className="h-16 w-16 text-terracotta-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Stay in <span className="text-gradient">Stile</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be the first to know about our latest collections, exclusive offers, 
              and style inspiration straight from Milano.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/80 border-cream-300 focus:border-terracotta-500 rounded-full px-6"
                required
              />
              <Button 
                type="submit"
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, only beautiful fashion updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
