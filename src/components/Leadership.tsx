import { Trophy, Users, Award } from 'lucide-react';

export default function Leadership() {
  const achievements = [
    'Qualified for Round 2 in Smart India Hackathon (2024, 2025)',
    'Nexathon 25 KCG Grand Finale Qualifier',
    'Ranked top 10 in Supraja Technologies CTF Hackathon and received internship offer',
    'Advanced to Round 2 of TVS Credit EPIC 7.0 with Fintech project'
  ];

  return (
    <section id="leadership" className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          Leadership & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Rotaract Club</h3>
                <p className="text-cyan-600 font-semibold">Easwari Engineering College</p>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Organized tech workshops and community outreach events, fostering collaboration
              and skill development among students while making positive social impact.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600">
                <Award className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">CSI Member</h3>
                <p className="text-cyan-600 font-semibold">Computer Society of India</p>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Active participation in hackathons nationwide, competing in various technology
              challenges and continuously expanding technical expertise.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
              <Trophy className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Key Achievements</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl p-4 border border-slate-200 hover:border-cyan-300 transition-all duration-300"
              >
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
