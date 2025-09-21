import { motion } from "framer-motion";
import { Database, Code, Zap, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Oracle Database Administration",
      description: "Enterprise-grade database management and optimization",
      skills: [
        { name: "Oracle 19c/21c", level: 95, impact: "Managed 500+ GB production databases" },
        { name: "RMAN Backup & Recovery", level: 90, impact: "Zero data loss in 3+ years" },
        { name: "Performance Tuning", level: 92, impact: "Improved query performance by 60%" },
        { name: "PL/SQL Development", level: 88, impact: "Automated 80% of routine tasks" },
        { name: "Data Guard & RAC", level: 85, impact: "99.9% uptime across clusters" },
      ]
    },
    {
      icon: Code,
      title: "Backend & Web3 Development",
      description: "Modern backend solutions and blockchain integration",
      skills: [
        { name: "Node.js & Express", level: 90, impact: "Built 15+ production APIs" },
        { name: "Smart Contracts", level: 85, impact: "Deployed secure DeFi protocols" },
        { name: "Ethers.js & Web3.js", level: 87, impact: "Integrated 10+ dApps" },
        { name: "REST API Design", level: 92, impact: "Served 1M+ requests/day" },
        { name: "Database Design", level: 94, impact: "Optimized schemas for scale" },
      ]
    },
    {
      icon: Zap,
      title: "Frontend & Modern Stack",
      description: "Contemporary web technologies and frameworks",
      skills: [
        { name: "React & TypeScript", level: 88, impact: "Built responsive dashboards" },
        { name: "Tailwind CSS", level: 90, impact: "Pixel-perfect UI implementations" },
        { name: "Git & DevOps", level: 85, impact: "Streamlined deployment pipelines" },
        { name: "IPFS Integration", level: 80, impact: "Decentralized file storage" },
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise security and vulnerability assessment",
      skills: [
        { name: "VAPT (Vulnerability Assessment)", level: 82, impact: "Secured 20+ applications" },
        { name: "Database Security", level: 90, impact: "Implemented RLS policies" },
        { name: "Blockchain Security", level: 85, impact: "Audited smart contracts" },
        { name: "Compliance Standards", level: 88, impact: "SOX & GDPR compliant systems" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Deep expertise across database administration, blockchain development, and modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-xl hover-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-cosmic">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                    
                    <p className="text-xs text-foreground-muted italic">
                      {skill.impact}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Oracle 21c", "RMAN", "Datapump", "SQL Developer", "Node.js", "Express.js",
              "Ethers.js", "Web3.js", "React", "TypeScript", "Tailwind CSS", "Git",
              "IPFS", "Smart Contracts", "PL/SQL", "Performance Tuning"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-card-border hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default SkillsSection;