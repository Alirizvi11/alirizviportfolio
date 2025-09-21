import { motion } from "framer-motion";
import { ExternalLink, Github, Award, Database, Blocks, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: "medledger",
      title: "MedLedger",
      subtitle: "Blockchain Healthcare Management",
      description: "Decentralized healthcare data management system using blockchain technology for secure patient record management and cross-institutional data sharing.",
      icon: Blocks,
      category: "Web3 & Healthcare",
      tech: ["Solidity", "Ethers.js", "React", "IPFS", "Node.js"],
      metrics: {
        security: "Zero breaches",
        performance: "< 2s load time",
        scale: "10K+ records"
      },
      features: [
        "Immutable patient records on blockchain",
        "IPFS-based document storage",
        "Smart contract access control",
        "Real-time data synchronization"
      ],
      links: {
        live: "https://medledgerfinal.vercel.app/",
        github: "https://github.com/Alirizvi11/MEDLEDGER_FINAL"
      },
      status: "Live Demo Available",
      highlight: "Awarded 3rd place in Avalanche Hackathon"
    },
    {
      id: "aptotagger",
      title: "AptoTagger",
      subtitle: "Move Smart Contract Indexing",
      description: "Advanced blockchain indexing solution for Aptos ecosystem, enabling efficient smart contract interaction and wallet integration with Move language support.",
      icon: Database,
      category: "Blockchain Infrastructure",
      tech: ["Move", "Aptos SDK", "TypeScript", "PostgreSQL", "Docker"],
      metrics: {
        indexing: "1M+ transactions",
        latency: "< 100ms queries",
        uptime: "99.9% SLA"
      },
      features: [
        "Real-time Move contract indexing",
        "Wallet integration & authentication",
        "GraphQL API for efficient queries",
        "Comprehensive transaction analytics"
      ],
      links: {
        github: "https://github.com/Alirizvi11/aptotagger-project-AptosHackerank"
      },
      status: "Hackathon Winner",
      highlight: "Leadership role in winning team"
    },
    {
      id: "bookvault",
      title: "BookVault",
      subtitle: "Learning Management System",
      description: "Full-stack LMS platform with Oracle database backend, featuring course management, progress tracking, and interactive learning modules for educational institutions.",
      icon: BookOpen,
      category: "Education Technology",
      tech: ["React", "Flask", "Oracle DB", "Python", "REST APIs"],
      metrics: {
        users: "500+ students",
        courses: "50+ modules",
        uptime: "99.5% reliability"
      },
      features: [
        "Interactive course delivery system",
        "Advanced progress analytics",
        "Oracle-powered data management",
        "Multi-role user management"
      ],
      links: {
        live: "https://demobookvaultui.vercel.app/",
        github: "https://github.com/Alirizvi11/BookVaultProject"
      },
      status: "Production Ready",
      highlight: "Deployed for educational institutions"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Production-ready applications showcasing expertise in database administration, Web3 development, and modern backend solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`glass-card rounded-xl p-8 hover-glow`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center`}>
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-cosmic">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {project.title}
                        </h3>
                        {project.highlight && (
                          <Award className="w-5 h-5 text-accent" />
                        )}
                      </div>
                      <p className="text-primary font-medium">{project.subtitle}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-foreground-muted leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-sm text-accent font-medium">
                        🏆 {project.highlight}
                      </p>
                    </div>
                  )}

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-foreground-muted capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-muted/20 text-muted-foreground border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <Button asChild className="btn-neon text-sm px-6 py-2">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" className="glass-card hover-glow px-6 py-2 text-sm border-card-border">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Features */}
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-lg border border-card-border">
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + featureIndex * 0.1 
                          }}
                          className="flex items-start gap-3 text-sm text-foreground-muted"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-4 rounded-lg border border-card-border bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span className="text-sm font-medium text-foreground">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button asChild variant="outline" className="glass-card hover-glow px-8 py-4 border-primary/30 text-primary">
            <a href="https://github.com/Alirizvi11?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-cosmic opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-cosmic opacity-10 rounded-full blur-3xl" />
    </section>
  );
};

export default ProjectsSection;
