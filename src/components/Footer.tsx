import { MessageCircle, Twitter, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">CPC</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-gradient">
                Century Platinum Coin
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Empowering individuals and families to rebuild their foundation for a better life 
              through innovative blockchain technology and community support.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/60">Built with hope</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {['About', 'Benefits', 'Token Info', 'Community'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase().replace(' ', ''));
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-sm text-foreground/70 hover:text-primary transition-smooth"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-semibold text-foreground">Community</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/mS6HzJ39"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-foreground/70 hover:text-primary transition-smooth"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discord</span>
              </a>
              <a
                href="https://x.com/centryplatumco?t=-_u1banhcjQXc8Foiz-kVA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-foreground/70 hover:text-primary transition-smooth"
              >
                <Twitter className="w-4 h-4" />
                <span>X (Twitter)</span>
              </a>
            </div>
          </div>

          {/* Legal & Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-semibold text-foreground">Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/70">Ethereum Network</span>
              </div>
              <div className="text-sm text-foreground/70">
                Contract: 0x49b83Ca1331...
              </div>
              <div className="text-sm text-foreground/70">
                ERC-20 Token
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © {currentYear} Century Platinum Coin. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Privacy Policy
              </button>
              <button className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Terms of Service
              </button>
              <button className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Disclaimer
              </button>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="mt-8 p-4 glass-card rounded-xl border border-yellow-500/20 bg-yellow-500/5">
            <p className="text-xs text-foreground/60 leading-relaxed text-center">
              <strong className="text-yellow-400">Disclaimer:</strong> Cryptocurrency investments carry risk. 
              Past performance does not guarantee future results. Please research and invest responsibly. 
              This is not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;