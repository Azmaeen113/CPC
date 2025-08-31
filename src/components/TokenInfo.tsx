import { useState } from 'react';
import { Copy, Check, ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const TokenInfo = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const contractAddress = "0x49b83Ca1331f43543B35e30A04C5a9C8F26369df";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const openEtherscan = () => {
    window.open(`https://etherscan.io/address/${contractAddress}`, '_blank');
  };

  return (
    <section id="token" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              <span className="text-foreground">Token</span>
              <span className="text-gradient"> Information</span>
            </h2>
            <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Essential details about Century Platinum Coin (CPC) and how to interact with our smart contract.
            </p>
          </div>

          {/* Main Token Info Card */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              {/* Token Symbol & Name */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-4 glass-card p-4 rounded-2xl border border-primary/30">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CPC</span>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-montserrat font-bold text-foreground">Century Platinum Coin</div>
                    <div className="text-sm text-foreground/60">ERC-20 Token</div>
                  </div>
                </div>
              </div>

              {/* Contract Address */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Info className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-montserrat font-semibold text-foreground">Contract Address</h3>
                </div>
                
                <div className="glass-card p-4 rounded-xl border border-primary/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <code className="text-sm md:text-base font-mono text-primary break-all">
                        {contractAddress}
                      </code>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyToClipboard}
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={openEtherscan}
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Click to copy the contract address or view on Etherscan
                  </p>
                </div>
              </div>

              {/* Network Info */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-sm text-foreground/60">Network</div>
                  <div className="text-lg font-semibold text-primary">Ethereum</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-foreground/60">Token Standard</div>
                  <div className="text-lg font-semibold text-primary">ERC-20</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-foreground/60">Symbol</div>
                  <div className="text-lg font-semibold text-primary">CPC</div>
                </div>
              </div>

              {/* Warning Notice */}
              <div className="glass-card p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-yellow-400">Important Notice</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Always verify the contract address before making any transactions. Only interact with official 
                      smart contracts and use reputable platforms. Never share your private keys or seed phrases.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={() => window.open('https://discord.gg/mS6HzJ39', '_blank')}
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-3 hover:glow-effect transition-smooth"
                >
                  Join Community
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://x.com/centryplatumco?t=-_u1banhcjQXc8Foiz-kVA&s=09', '_blank')}
                  className="border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8 py-3 transition-smooth"
                >
                  Follow Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;