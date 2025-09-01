import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/energy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/10 rounded-full blur-md animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black leading-tight">
                <span className="text-gradient">Century</span>
                <br />
                <span className="text-foreground">Platinum</span>
                <br />
                <span className="text-primary">Coin</span>
              </h1>
              <div className="w-24 h-1 gradient-primary rounded-full"></div>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-inter font-light text-foreground/90 leading-relaxed">
              A Second Chance for
              <span className="text-primary font-semibold"> Hope</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-lg leading-relaxed">
              Empowering individuals and families to rebuild their foundation for a better life through innovative blockchain technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://discord.gg/mS6HzJ39', '_blank')}
                className="gradient-primary text-white font-semibold text-lg px-8 py-6 hover:glow-effect transition-smooth group"
              >
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 opacity-70">
              <div className="text-sm font-inter">
                <div className="text-primary font-semibold">BNB</div>
                <div className="text-foreground/60">Network</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-sm font-inter">
                <div className="text-primary font-semibold">Community</div>
                <div className="text-foreground/60">Driven</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-sm font-inter">
                <div className="text-primary font-semibold">Transparent</div>
                <div className="text-foreground/60">Future</div>
              </div>
            </div>
          </div>

          {/* Right Column - Token Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Token Image with Twinkle Effect */}
              <img 
                src="/logo.png" 
                alt="Century Platinum Coin Logo" 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover animate-float rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
                  animation: 'twinkle 2s ease-in-out infinite alternate'
                }}
              />

              {/* Twinkle Effect Overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;