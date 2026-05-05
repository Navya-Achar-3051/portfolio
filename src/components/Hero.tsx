  import { motion } from "framer-motion";
  import { ArrowRight, Download, ChevronDown } from "lucide-react";
  import navyaPhoto from "../assets/photo.png";
  
  export default function Hero() {
    const scrollToContact = () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>
  
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Corporate Training
            </div>
            
            <h1 className="font-extrabold leading-tight mb-6">
              <span className="block text-4xl md:text-5xl mb-1">Hi, I'm</span>
              <span className="text-gradient text-5xl md:text-7xl whitespace-nowrap">NAVYA R S</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              IT Corporate Trainer & Developer
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed">
              Transforming Complex Concepts into Engaging Learning Experiences. Specializing in Data Analytics, AI/ML, and Front-End Development.
            </p>
  
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_30px_-5px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_-5px_rgba(234,179,8,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={18} />
              </button>
              <a 
                href="/resume.pdf" 
                className="px-8 py-4 rounded-xl font-semibold glass-panel hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-[400px] h-[480px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-4 rounded-[2rem] border border-white/10 glass-panel rotate-3" />
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden -rotate-3 border border-primary/30">
                <img 
                  src={navyaPhoto}
                  alt="Navya R S" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
  
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </section>
    );
  }
  