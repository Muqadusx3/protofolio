'use client';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Project = {
  title: string;
  tech: string[];
  description: string;
  demoLink?: string;
  githubLink?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-16 text-blue-800">Loading projects...</div>;
  }

  return (
    <section id="projects" className="py-8 bg-white text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 text-blue-900">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white border p-6 rounded-2xl shadow-xl hover:shadow-blue-500/20 hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-md md:text-xl font-bold text-blue-400 mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-20 to-blue-100 text-sm text-black px-3 py-1 rounded-full font-medium md:font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                {proj.demoLink && (
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-400 hover:text-yellow-300 transition-colors"
                  >
                    Live Demo <FaExternalLinkAlt className="ml-1" />
                  </a>
                )}
                {proj.githubLink && (
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-400 hover:text-yellow-400 transition-colors"
                  >
                    GitHub <FaGithub className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
