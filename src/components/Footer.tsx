import { Phone, Mail, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Chezhian V.</h3>
            <p className="text-slate-300 leading-relaxed">
              Tech Enthusiast | Ethical Hacker | Web Developer
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-300 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-slate-300 hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-slate-300 hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-slate-300 hover:text-cyan-400 transition-colors">
                Experience
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:919444073328" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone size={18} />
                <span>91-9444073328</span>
              </a>
              <a href="mailto:xchezhiangmail.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail size={18} />
                <span>xchezhiangmail.com</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 rounded-lg hover:bg-cyan-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 rounded-lg hover:bg-cyan-600 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-cyan-400" fill="currentColor" /> by Chezhian V.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
