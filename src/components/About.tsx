import cpcTokenStone from '@/assets/cpc-token-stone.png';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
                <span className="text-gradient">Rebuilding</span>
                <br />
                <span className="text-foreground">Foundations</span>
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                In today's world, many individuals and families struggle just to meet basic needs like 
                <span className="text-primary font-semibold"> food, shelter, and stability</span>. 
                Often, people lose everything and never get the opportunity for a second chance.
              </p>
              
              <p>
                <span className="text-accent font-semibold">Century Platinum Coin (CPC)</span> represents 
                <span className="text-primary font-bold"> hope</span> – a chance for individuals and families 
                to rebuild their foundation for a better life.
              </p>

              <p>
                Through innovative blockchain technology and community-driven initiatives, we're creating 
                opportunities where traditional systems have failed. Every token represents not just value, 
                but <span className="text-gradient font-semibold">potential and possibility</span>.
              </p>
            </div>

            {/* Mission Statement Card */}
            <div className="glass-card p-6 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                To empower those who have lost everything with the tools and opportunities to rebuild, 
                creating a sustainable ecosystem where hope transforms into tangible progress.
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full scale-125"></div>
              
              {/* Stone Token Image */}
              <img 
                src="/image.jpg" 
                alt="Century Platinum Coin Image" 
                className="relative w-80 h-80 md:w-96 md:h-96 object-contain rounded-2xl"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px hsl(0 0% 0% / 0.3))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;