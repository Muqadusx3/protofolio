'use client';

import { useEffect, useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';

type Experience = {
  company: string;
  role?: string;
  duration: string;
  details?: string[];
};

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch('/api/experience');
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section id="experience" className="bg-white text-blue-900 px-4 py-5 md:px-20 scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-bold flex items-center justify-center gap-2 text-blue-900">
          Experience
        </h2>
        <p className="text-sm md:text-md text-gray-600 mt-2">
          My journey through internships and leadership roles
        </p>
      </div>

      <div className="relative border-l-4 border-purple-200 pl-6 md:pl-10 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 top-2 w-7 md:w-10 h-7 md:h-10 bg-white border-4 border-purple-400 rounded-full flex items-center justify-center shadow-md">
              <FaBriefcase className="text-purple-400 text-sm md:text-lg" />
            </div>

            <div className="bg-gradient-to-r from-blue-20 to-purple-50 p-3 md:p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-md md:text-xl text-blue-900">{exp.company}</h3>
              {exp.role && <p className="text-sm md:text-md font-medium mt-1 text-gray-600">{exp.role}</p>}
              <p className="text-sm italic mt-1 text-blue-700">{exp.duration}</p>
              {exp.details && (
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 text-gray-900">
                  {exp.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
