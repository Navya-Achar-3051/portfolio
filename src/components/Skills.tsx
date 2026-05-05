import { motion } from "framer-motion";
import { Code2, Database, Layout, Cloud, BrainCircuit, Terminal, Trophy } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-yellow-400 to-amber-500",
    skills: ["Python", "Java", "C++", "JavaScript", "SQL"]
  },
  {
    title: "AI & Data Analytics",
    icon: BrainCircuit,
    color: "from-blue-500 to-blue-700",
    skills: ["Machine Learning", "Data Analytics", "Power BI", "Pandas/NumPy"]
  },
  {
    title: "Front-End Development",
    icon: Layout,
    color: "from-yellow-300 to-yellow-500",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-blue-400 to-blue-600",
    skills: ["AWS", "Git/GitHub", "Linux Admin", "Shell Scripting"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-amber-400 to-yellow-600",
    skills: ["MySQL", "Oracle", "PostgreSQL", "Database Design"]
  },
  {
    title: "Tools & OS",
    icon: Terminal,
    color: "from-blue-600 to-blue-800",
    skills: ["Windows", "Linux (Red Hat)", "VS Code", "Jupyter"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="glass-panel p-6 rounded-2xl hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold font-display">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-muted-foreground border border-white/5 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Red Hat Linux System Administration (KGTTI)", "DevOps + AWS (PW Skills)", "Microsoft Python (Tequed Labs)"].map(cert => (
              <div key={cert} className="px-6 py-3 rounded-full border border-secondary/30 bg-secondary/5 text-secondary font-medium text-sm flex items-center gap-2">
                <Trophy size={16} />
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
