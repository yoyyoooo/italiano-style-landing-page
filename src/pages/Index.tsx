
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
