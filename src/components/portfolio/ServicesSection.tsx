import { motion } from "framer-motion";
import { Database, Shield, Blocks, Code, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Oracle Database Administration",
      description: "Enterprise-grade database management, optimization, and 24/7 support services",
      features: [
        "Database performance tuning & optimization",
        "RMAN backup & disaster recovery",
        "High availability setup (RAC, Data Guard)",
        "Database migration & upgrades",
        "24/7 monitoring & support"
      ],
      pricing: "Enterprise engagements typically start from $10+",
      highlight: "99.9% uptime guaranteed",
      color: "primary"
    },
    {
      icon: Blocks,
      title: "Web3 & Blockchain Development",
      description: "End-to-end blockchain solutions from smart contracts to full dApp development",
      features: [
        "Smart contract development & auditing",
        "DeFi protocol implementation",
        "Wallet integration & authentication",
        "IPFS & decentralized storage",
        "Cross-chain compatibility"
      ],
      pricing: "Custom blockchain projects from $100+",
      highlight: "Security-first approach",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Security & VAPT Services",
      description: "Comprehensive vulnerability assessment and penetration testing for applications",
      features: [
        "Application security assessment",
        "Database security auditing",
        "Smart contract security reviews",
        "Compliance reporting (SOX, GDPR)",
        "Remediation guidance & support"
      ],
      pricing: "Security assessments from $100+",
      highlight: "OWASP certified methodology",
      color: "accent"
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Scalable backend systems with modern architecture and best practices",
      features: [
        "RESTful API development",
        "Microservices architecture",
        "Database design & optimization",
        "CI/CD pipeline setup",
        "Performance monitoring & scaling"
      ],
      pricing: "Full-stack projects from $50+",
      highlight: "Production-ready solutions",
      color: "luxury-gold"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500 Financial Services",
      feedback: "Ali's database optimization work reduced our query times by 70% and saved us $2M annually in infrastructure costs.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering",
      company: "Blockchain Startup",
      feedback: "The smart contract security audit was thorough and professional. Ali identified critical vulnerabilities we missed.",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your requirements, current infrastructure, and business objectives"
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Comprehensive technical roadmap with milestones, timelines, and success metrics"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Agile development with regular updates, testing, and stakeholder feedback"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, knowledge transfer, and ongoing maintenance support"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
            Enterprise Services
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive technical solutions designed for enterprise-scale challenges and high-value business outcomes
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl hover-glow group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-cosmic group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mb-3">
                    {service.description}
                  </p>
                  {service.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Star className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-medium">{service.highlight}</span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-foreground-muted">
                    <ArrowRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border/20">
                <p className="text-sm font-medium text-primary mb-3">
                  {service.pricing}
                </p>
                <Button 
                  variant="outline" 
                  className="glass-card hover-glow w-full border-card-border group-hover:border-primary/50 transition-colors"
                >
                  Discuss Project Requirements
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="glass-card p-6 rounded-lg text-center hover-glow relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-foreground-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Client Testimonials
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-glow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground-muted italic mb-4">
                  "{testimonial.feedback}"
                </blockquote>
                <div>
                  <cite className="text-foreground font-semibold not-italic">{testimonial.name}</cite>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-xs text-foreground-muted">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center glass-card p-12 rounded-2xl cosmic-border"
        >
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Transform Your Project?
          </h3>
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build scalable, secure solutions that drive real business value for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-neon px-8 py-4">
              Schedule Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="glass-card hover-glow px-8 py-4 border-card-border"
            >
              Download Service Overview
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-cosmic opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-cosmic opacity-5 rounded-full blur-3xl" />
    </section>
  );
};

export default ServicesSection;