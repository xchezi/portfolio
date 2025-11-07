import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

          <div className="relative pl-20 pb-12">
            <div className="absolute left-4 top-2 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Briefcase className="text-white" size={20} />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Cybersecurity Intern
                  </h3>
                  <p className="text-xl text-cyan-600 font-semibold">
                    Supraja Technologies
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-cyan-600" />
                    <span className="font-medium">June - July 2025</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">
                    Conducted comprehensive penetration tests on web applications to identify security vulnerabilities
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">
                    Identified and patched <span className="font-bold text-slate-800">30 critical vulnerabilities</span> across multiple client systems
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">
                    Built <span className="font-semibold text-slate-800">Keylogger Analyzer</span> as part of project work, implementing real-time threat detection
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 border border-cyan-200">
                  Penetration Testing
                </span>
                <span className="bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 border border-cyan-200">
                  Vulnerability Assessment
                </span>
                <span className="bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 border border-cyan-200">
                  Security Patching
                </span>
                <span className="bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 border border-cyan-200">
                  Python Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
