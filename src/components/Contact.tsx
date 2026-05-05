import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const formData = new FormData(form);
    
    fetch("https://formsubmit.co/navyaacchar.rs@gmail.com", {
      method: "POST",
      body: formData,
    }).then(() => {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000);
    }).catch(() => {
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">
            Available for corporate training opportunities and consultations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+91 9108594467</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a 
                  href="mailto:navyaacchar.rs@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  navyaacchar.rs@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Karnataka, India</p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold font-display mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Your Email
                  </label>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Subject
                </label>
                <input 
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Message
                </label>
                <textarea 
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}