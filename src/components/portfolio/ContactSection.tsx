import { motion } from "framer-motion";
import { Mail, Phone, Calendar, MessageSquare, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
    attachment: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachment: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("company", formData.company);
    data.append("project", formData.project);
    data.append("budget", formData.budget);
    data.append("message", formData.message);
    if (formData.attachment) {
      data.append("attachment", formData.attachment);
    }
    data.append("_subject", `New Project Inquiry from ${formData.name}`);
    data.append("_replyto", formData.email);

    try {
      const response = await fetch("https://formspree.io/f/mldprrbn", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          budget: "",
          message: "",
          attachment: null
        });
        alert('Thank you! Your message has been sent successfully.');
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "the.er.alirizvi@gmail.com",
      action: "mailto:the.er.alirizvi@gmail.com",
      description: "For detailed project discussions"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 7084096364",
      action: "https://wa.me/917084096364",
      description: "Quick consultation & support"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book a meeting",
      action: "https://calendly.com/alirizvi11",
      description: "30-min strategy session"
    }
  ];

  const socialLinks = [
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/alirizvi110"
    },
    {
        icon: Github,
        href: "https://github.com/Alirizvi11"
    },
    {
        icon: Twitter,
        href: "https://x.com/alirizvi9936"
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/alisyed11_"
    }
  ];

  const servicePackages = [
    {
      title: "Database Consultation",
      description: "Oracle DB optimization, migration, and performance tuning",
      startingPrice: "Contact for quote",
      features: ["Performance audit", "Migration planning", "24/7 support", "Documentation"]
    },
    {
      title: "Web3 Development",
      description: "Smart contract development and blockchain integration",
      startingPrice: "From ₹10000",
      features: ["Smart contract audit", "dApp development", "Wallet integration", "Testing suite"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web application development from frontend to backend",
      startingPrice: "From ₹20000",
      features: ["React & Next.js UI", "REST API & GraphQL", "Database design", "Cloud deployment"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Ready to discuss your next enterprise project? Let's explore how we can transform your ideas into scalable, secure solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Get In Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-4 rounded-lg hover-glow block group transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gradient-cosmic group-hover:scale-110 transition-transform">
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{method.title}</h4>
                    <p className="text-primary font-medium">{method.value}</p>
                    <p className="text-xs text-foreground-muted">{method.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Socials */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4"
            >
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex items-center gap-4">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="glass-card p-3 rounded-lg hover-glow"
                        >
                            <social.icon className="w-5 h-5 text-foreground" />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-card-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-card-border focus:border-primary"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass-card border-card-border focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="glass-card border-card-border focus:border-primary"
                      placeholder="Database, Web3, Security, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <Input
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="glass-card border-card-border focus:border-primary"
                    placeholder="₹5K - ₹50K, ₹50K+, or discuss"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="glass-card border-card-border focus:border-primary resize-none"
                    placeholder="Tell me about your project requirements, timeline, and objectives..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Attach SOW/RFP (Optional)
                  </label>
                  <Input
                    name="attachment"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="glass-card border-card-border focus:border-primary file:bg-primary file:text-primary-foreground file:border-0 file:rounded file:px-3 file:py-1 file:text-sm"
                  />
                </div>

                <Button type="submit" className="w-full btn-neon">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Project Inquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Service Packages */}
        <motion.div
          id="services"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-semibold text-center text-foreground mb-8">
            Service Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {servicePackages.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg hover-glow text-center"
              >
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-foreground-muted mb-4">{service.description}</p>
                <div className="text-lg font-bold text-primary mb-4">{service.startingPrice}</div>
                <ul className="space-y-2 text-xs text-foreground-muted">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-16 border-t border-border/20"
        >
          <blockquote className="text-lg italic text-foreground-muted max-w-4xl mx-auto">
            "Success in technology comes not just from technical skill, but from aligning our work with purpose and building solutions that benefit all of humanity."
          </blockquote>
          <cite className="block mt-4 text-primary font-medium">— Ali Rizvi</cite>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;
