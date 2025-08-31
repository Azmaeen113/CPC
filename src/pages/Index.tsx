import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import TokenInfo from '@/components/TokenInfo';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <TokenInfo />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
