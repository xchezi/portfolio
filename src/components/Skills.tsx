import { Code2, Shield, Globe, Database, Wrench, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['Ethical Hacking', 'VAPT', 'Metasploit'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'UI/UX'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Figma', 'Git', 'Wireshark', 'AI Generative Tools'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Collaboration', 'Adaptability', 'Problem Solving', 'Communication', 'Critical Thinking'],
      color: 'from-cyan-600 to-blue-700'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gradient-to-br from-slate-50 to-cyan-50 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
