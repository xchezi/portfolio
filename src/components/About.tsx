import { Phone, Mail, Linkedin, GraduationCap, Languages } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-cyan-100">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-cyan-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-800">Contact Info</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <Phone size={20} className="text-cyan-600" />
                <span className="text-lg">91-9444073328</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail size={20} className="text-cyan-600" />
                <span className="text-lg">xchezhiangmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Linkedin size={20} className="text-cyan-600" />
                <a href="https://linkedin.com" className="text-lg hover:text-cyan-600 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-800">Languages</h3>
            </div>
            <div className="flex gap-4">
              <span className="bg-white px-6 py-3 rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200">
                English
              </span>
              <span className="bg-white px-6 py-3 rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200">
                Tamil
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-cyan-600" size={32} />
            <h3 className="text-2xl font-bold text-slate-800">Education</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                Bachelor of Engineering, Computer Science and Engineering
              </h4>
              <p className="text-cyan-600 font-semibold mb-2">Easwari Engineering College</p>
              <div className="flex flex-wrap gap-4 text-slate-600">
                <span>2027</span>
                <span className="text-cyan-600 font-semibold">•</span>
                <span className="font-semibold text-slate-800">GPA: 8.8</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                Higher Secondary
              </h4>
              <p className="text-cyan-600 font-semibold mb-2">St. Michaels Academy</p>
              <div className="flex flex-wrap gap-4 text-slate-600">
                <span>2023</span>
                <span className="text-cyan-600 font-semibold">•</span>
                <span className="font-semibold text-slate-800">Percentage: 92.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
