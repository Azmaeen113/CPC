import { Vote, Users, Globe, TrendingUp, Shield, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Shares & Partial Ownership",
      description: "Gain meaningful ownership stakes and participate in the growth of our ecosystem through transparent profit-sharing mechanisms.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Vote,
      title: "Right to Vote & Have a Voice",
      description: "Direct democratic participation in platform decisions. Your voice matters in shaping the future of our community.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Globe,
      title: "Make a Real Difference Worldwide",
      description: "Join a global movement that creates tangible impact for families and individuals seeking their second chance at life.",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Built on Ethereum blockchain with full transparency, smart contracts, and community-audited protocols.",
      gradient: "from-accent/60 to-primary/60"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with like-minded individuals committed to creating positive change and supporting those in need.",
      gradient: "from-primary/70 to-accent/70"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Every transaction contributes to our foundation fund, directly supporting families rebuilding their lives.",
      gradient: "from-accent/80 to-primary/90"
    }
  ];

  return (
    <section id="benefits" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
            <span className="text-gradient">Investment</span>
            <span className="text-foreground"> Benefits</span>
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Join our ecosystem and unlock powerful benefits while making a meaningful impact on lives worldwide.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-smooth group hover:glow-effect"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 mb-6 group-hover:scale-110 transition-smooth`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
              Ready to Make a <span className="text-primary">Difference</span>?
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Join thousands of community members who are already creating positive change 
              while building their financial future.
            </p>
            <button 
              onClick={() => window.open('https://discord.gg/mS6HzJ39', '_blank')}
              className="gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:glow-effect transition-smooth"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;