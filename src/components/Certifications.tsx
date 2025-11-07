import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      organization: 'Infosys Springboard',
      title: 'Warrior Badge Holder',
      courses: ['Java', 'Hibernate', 'HTML5', 'CSS3', 'JavaScript', 'C Fundamentals'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      organization: 'Cisco Networking Academy',
      courses: ['Python Essentials 1', 'Networking Basics', 'CCNA - Level 1'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      organization: 'NPTEL',
      title: 'Elite Medal - Score: 86',
      courses: ['Internet of Things (IoT)'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      organization: 'EY',
      courses: ['AI Skills'],
      color: 'from-slate-600 to-slate-700'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} flex-shrink-0`}>
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {cert.organization}
                  </h3>
                  {cert.title && (
                    <p className="text-cyan-600 font-semibold text-sm">
                      {cert.title}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2 mt-4">
                {cert.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle size={16} className="text-cyan-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
