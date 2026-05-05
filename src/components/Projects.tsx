import { motion } from "framer-motion";
import { Code, Layers, FileCode2 } from "lucide-react";

const projects = [
  {
    title: "AI/ML Training Curriculum",
    description: "Designed comprehensive AI/ML curriculum for corporate clients including JPMorgan and NASSCOM. Covers ML algorithms, neural networks, and practical implementations.",
    icon: Layers,
    tags: ["Machine Learning", "Curriculum Design", "Python", "Neural Networks"],
    color: "primary"
  },
  {
    title: "Full-Stack Web Development Course",
    description: "Created an end-to-end web development training program covering HTML, CSS, JavaScript, React, and backend integration. Emphasis on live coding and project building.",
    icon: Code,
    tags: ["React", "JavaScript", "HTML/CSS", "Backend"],
    color: "secondary"
  },
  {
    title: "Data Analytics Dashboard Training",
    description: "Power BI dashboard training program for enterprise clients, covering data visualization, DAX formulas, and business intelligence methodologies.",
    icon: FileCode2,
    tags: ["Power BI", "Data Visualization", "DAX", "Analytics"],
    color: "accent"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Curriculums</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of specialized training programs and curriculums I've developed for enterprise clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden glass-panel flex flex-col h-full hover:border-primary/50 transition-all duration-500"
            >
              
              <div className="p-8 flex flex-col h-full relative overflow-hidden">
                
                {/* Glow */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-${project.color}/10 rounded-full blur-3xl group-hover:bg-${project.color}/20 transition-all duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 text-${project.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <project.icon size={28} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-display mb-3 text-foreground group-hover:text-primary transition-colors relative z-10">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}