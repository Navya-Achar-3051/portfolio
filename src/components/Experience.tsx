import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "IT Corporate Trainer",
    company: "Seventh Sense Talent Solutions Pvt Ltd",
    period: "Jun 2024 – Present",
    description: "Specializing in AI/ML, Data Analytics, and Power BI training for prestigious clients including JPMorgan and NASSCOM. Consistently achieved the highest feedback and ratings for impactful sessions aligned with organizational needs.",
    skills: ["AI/ML", "Data Analytics", "Power BI", "Corporate Training"]
  },
  {
    role: "Online Technical Trainer (Part-time)",
    company: "Suprmentr",
    period: "Present",
    description: "Delivering online training sessions specializing in web development and AI/ML for engineering and degree college students across Karnataka.",
    skills: ["Web Development", "AI/ML", "Mentorship"]
  },
  {
    role: "Technical Trainer",
    company: "Audaz Learnings",
    period: "Nov 2022 – March 2024",
    description: "Conducted comprehensive training on Python, Java, and front-end web development (HTML, CSS, JS, frameworks). Achieved 4.7/5 average ratings, recognized for simplifying complex concepts through live coding and hands-on projects.",
    skills: ["Python", "Java", "Frontend Dev", "Curriculum Design"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
              
              {/* Content Card */}
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className={`flex items-center gap-2 text-primary text-sm font-semibold mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-1 text-foreground">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
