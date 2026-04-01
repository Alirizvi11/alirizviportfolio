import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveOrb from "./InteractiveOrb";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg grid-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-luxury-chrome"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Pune, Maharashtra</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-display font-bold text-gradient leading-tight"
              >
                Ali Rizvi
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                  Oracle Database Administrator
                </h2>
                <h3 className="text-xl lg:text-2xl text-secondary">
                  Web3 & Full Stack Developer
                </h3>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-foreground-muted leading-relaxed max-w-2xl"
            >
              Passionate about building scalable database systems, blockchain-powered applications, 
              and modern backend solutions with precision and purpose. Available for enterprise 
              consulting and high-value technical leadership roles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="btn-neon group">
                <a href="/Ali-Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <Button asChild variant="outline" className="glass-card hover-glow px-8 py-4 border-card-border">
                <a href="#projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Projects
                </a>
              </Button>
              
              <Button asChild variant="outline" className="glass-card hover-glow px-8 py-4 border-accent">
                <a href="#contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Request Consultation
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 border-t border-border/20"
            >
              <p className="text-sm text-foreground-muted mb-4">Certified in:</p>
              <div className="flex flex-wrap gap-6 items-center">
                {["Oracle Cloud Infrastructure", "Python Programming", "SQL Expert", "HackerRank"].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="glass-card px-3 py-1 rounded-full text-xs font-medium border border-card-border"
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Orb */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center"
          >
            <InteractiveOrb />
          </motion.div>
        </div>
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
