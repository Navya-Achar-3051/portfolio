import { motion } from "framer-motion";
import { BookOpen, Star, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Star, label: "Average Rating", value: "4.7/5" },
  { icon: Users, label: "Professionals Trained", value: "500+" },
  { icon: BookOpen, label: "Years Experience", value: "4+" },
  { icon: Trophy, label: "Top Clients", value: "JPMorgan" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 font-display">
              Passionate Educator & Technologist
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated IT Corporate Trainer with a strong foundation in Computer Science (8.92 GPA). My mission is to bridge the gap between complex technical concepts and practical, real-world application.
              </p>
              <p>
                Over the past 4+ years, I have successfully designed and delivered customized training modules across diverse audiences, from fresh engineering graduates to corporate professionals at Fortune 500 companies like JPMorgan.
              </p>
              <p>
                My teaching philosophy emphasizes hands-on learning through live coding, interactive dashboards, and end-to-end projects. Whether it's architecting an AI/ML curriculum or teaching modern front-end frameworks, I ensure my learners are industry-ready.
              </p>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2">Education</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <p className="font-medium text-foreground">B.E in Computer Science</p>
                    <p className="text-sm text-muted-foreground">Sri Krishna Institute of Technology • 8.92 GPA</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <stat.icon size={24} />
                </div>
                <h4 className="text-3xl font-bold font-display mb-1">{stat.value}</h4>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
