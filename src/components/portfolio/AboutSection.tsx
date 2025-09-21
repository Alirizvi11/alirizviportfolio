import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, MapPin, Users, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Avalanche Hackathon",
      subtitle: "3rd Place Winner",
      description: "Led development team to victory with innovative blockchain solution"
    },
    {
      icon: Target,
      title: "100% Live Demos",
      subtitle: "Production Ready",
      description: "All portfolio projects are fully functional and deployed"
    },
    {
      icon: Users,
      title: "Enterprise Ready",
      subtitle: "24/7 Support",
      description: "Flexible availability and willingness to relocate for projects"
    }
  ];

  const timeline = [
    {
      year: "2021-2025",
      title: "B.Tech Computer Science",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      status: "Final Year",
      certificate: null
    },
    {
      year: "2025",
      title: "OCI 2025 Certified AI Foundations Associate",
      institution: "Oracle University",
      status: "Certified",
      certificate: "https://postimg.cc/4mT9sxb1"
    },
    {
      year: "2025",
      title: "Oracle DBA Training & Certification",
      institution: "Learnomate Technology",
      status: "Certified",
      certificate: "https://postimg.cc/VdDXQg09"
    },
    {
      year: "2023",
      title: "Python",
      institution: "ElectrocusPvtLtd",
      status: "Certified",
      certificate: "https://postimg.cc/bD4GmSKn"
    },
    {
      year: "2025",
      title: "SQL (Basic & Intermediate)",
      institution: "HackerRank",
      status: "Certified",
      certificate: "https://postimg.cc/fJ1Ly4Qd"
    },
  
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-6"
              >
                About Ali Rizvi
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary font-medium mb-4"
              >
                "Building tomorrow's enterprise solutions today"
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-foreground-muted leading-relaxed"
            >
              <p>
                As a passionate Oracle Database Administrator and Web3/Backend Developer, I bridge the gap 
                between traditional enterprise database systems and cutting-edge blockchain technologies. 
                Currently pursuing my B.Tech in Computer Science from AKTU (2025), I bring both academic 
                rigor and real-world experience to every project.
              </p>
              <p>
                My expertise spans from optimizing high-performance Oracle databases serving millions of 
                transactions to developing secure smart contracts and decentralized applications. I thrive 
                on solving complex technical challenges and transforming innovative ideas into scalable, 
                production-ready solutions that drive business value.
              </p>
            </motion.div>

            {/* Key Qualities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Clock, label: "24/7 Support", desc: "Flexible availability" },
                { icon: MapPin, label: "Relocatable", desc: "Open to opportunities" },
                { icon: Users, label: "Team Player", desc: "Collaborative approach" },
                { icon: Target, label: "Results Driven", desc: "Outcome focused" }
              ].map((quality, index) => (
                <motion.div
                  key={quality.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 rounded-lg text-center"
                >
                  <quality.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">{quality.label}</h4>
                  <p className="text-xs text-foreground-muted">{quality.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.img
                src="https://i.postimg.cc/mgYctT0j/Ali.jpg"
                alt="Ali Rizvi - Professional Portrait"
                className="w-full max-w-md mx-auto rounded-2xl shadow-neon-primary cosmic-border"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-full text-xs font-medium border border-primary/30"
              >
                Available for Hire
              </motion.div>
            </div>

            {/* Location & Availability */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Based in Pune, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">B.Tech CSE, AKTU (Final Year)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Available 24/7 for enterprise projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Open to relocation for the right opportunity</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-glow text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-cosmic w-fit mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                <p className="text-primary font-medium mb-2">{achievement.subtitle}</p>
                <p className="text-sm text-foreground-muted">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Education & Certifications
          </h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center gap-8 mb-8 last:mb-0"
              >
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-cosmic opacity-30" />
                )}
                
                {/* Timeline Dot */}
                <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center flex-shrink-0 z-10">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="glass-card p-6 rounded-lg flex-1 hover-glow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-foreground-muted mb-1">{item.institution}</p>
                  <p className="text-sm text-luxury-chrome mb-4">{item.year}</p>

                  {item.certificate && (
                    <Button asChild variant="outline" size="sm" className="glass-card hover-glow border-primary/30 text-primary">
                      <a href={item.certificate} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutSection;
