export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Navya R S. All rights reserved.
        </p>
        <div className="flex text-sm text-muted-foreground gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
