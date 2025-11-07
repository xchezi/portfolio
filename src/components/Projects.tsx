import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'RuralCareX Telemedicine App',
      tech: ['React', 'TypeScript', 'Vite', 'CSS', 'Supabase'],
      description: 'Multilingual telemedicine app enabling remote consultations and offline health records for rural patients.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI-Powered Loan Assistant Chatbot',
      tech: ['Bolt', 'AI'],
      description: 'Chatbot to streamline loan onboarding and boost financial inclusion in rural areas.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Drug Interaction Checker',
      tech: ['Python', 'DrugBank API'],
      description: 'Real-time medication safety tool analyzing 10,000+ drug combinations.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Face Authentication Model',
      tech: ['AES Decryption', 'Browser ML Protection'],
      description: 'UIDAI-compliant face authentication with AES-256 encryption and anti-spoofing.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Keylogger Analyzer',
      tech: ['Python', 'Windows/Linux', 'ML'],
      description: 'Lightweight system detecting suspicious keystrokes and preventing keylogger attacks in real-time.',
      color: 'from-slate-600 to-slate-700'
    },
    {
      title: 'Smart Study Scheduler',
      tech: ['C'],
      description: 'Intelligent scheduling system for optimizing study sessions and time management.',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Drone Swarm Simulation',
      tech: ['MATLAB'],
      description: 'Simulation of coordinated drone swarm behavior for research and development.',
      color: 'from-blue-500 to-sky-500'
    },
    {
      title: 'Hotel Management System',
      tech: ['Python'],
      description: 'Comprehensive system for managing hotel operations, bookings, and customer data.',
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 group"
            >
              <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} mb-4`}>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white px-3 py-1 rounded-lg text-sm font-medium text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
