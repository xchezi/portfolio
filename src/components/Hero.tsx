import { Download, Linkedin, Shield, Code, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100 opacity-70"></div>

      <div className="absolute top-20 left-10 text-cyan-400 opacity-20">
        <Shield size={120} />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-400 opacity-20">
        <Terminal size={100} />
      </div>
      <div className="absolute top-40 right-32 text-slate-400 opacity-20">
        <Code size={80} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-4 tracking-tight">
            Chezhian V.
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-600 font-medium mb-8">
            Tech Enthusiast | Ethical Hacker | Web Developer
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-10 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed">
            Hands-on experience in cybersecurity projects, digital forensics, and full-stack applications.
            Quick learner with strong collaboration, problem-solving, and adaptability skills, actively
            contributing to hackathons and real-world tech solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download size={24} />
            Download Resume
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-300 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Linkedin size={24} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
