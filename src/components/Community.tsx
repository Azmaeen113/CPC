import { MessageCircle, Twitter, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Community = () => {
  const socialLinks = [
    {
      name: "Discord",
      description: "Join our active community discussions and get real-time updates",
      icon: MessageCircle,
      url: "https://discord.gg/mS6HzJ39",
      members: "1,000+",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "X (Twitter)",
      description: "Follow us for the latest news, announcements, and market insights",
      icon: Twitter,
      url: "https://x.com/centryplatumco?t=-_u1banhcjQXc8Foiz-kVA&s=09",
      members: "500+",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-400/10"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "1,500+",
      label: "Community Members",
      description: "Growing daily"
    },
    {
      icon: MessageCircle,
      value: "24/7",
      label: "Community Support",
      description: "Always here to help"
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Transparency",
      description: "Open & honest"
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
            <span className="text-foreground">Join Our</span>
            <span className="text-gradient"> Community</span>
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Connect with like-minded individuals committed to creating positive change and building a better future together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-montserrat font-bold text-primary">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-foreground/60">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Media Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-smooth group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${social.bgColor} rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-smooth`}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-montserrat font-bold text-foreground">{social.name}</h3>
                        <div className="text-sm text-foreground/60">{social.members} members</div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {social.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-full gradient-primary text-primary-foreground font-semibold py-3 hover:glow-effect transition-smooth group"
                  >
                    Join {social.name}
                    <IconComponent className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
              Stay <span className="text-primary">Updated</span>
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Be the first to know about important announcements, token updates, and community events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-primary/20 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-smooth"
              />
              <Button className="gradient-primary text-primary-foreground font-semibold px-6 py-3 hover:glow-effect transition-smooth whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-foreground/50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;