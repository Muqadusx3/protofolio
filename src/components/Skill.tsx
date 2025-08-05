'use client'
import { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { IconType } from 'react-icons';

type Skill = {
  name: string;
  icon: string;
};

const iconMap: Record<string, IconType> = {
  ...FaIcons,
  ...SiIcons,
};

export default function Skills() {
  const [technicalSkills, setTechnicalSkills] = useState<Skill[]>([]);
  const [professionalSkills, setProfessionalSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch('/api/skills')
      .then((res) => res.json())
      .then((data) => {
        setTechnicalSkills(data.technicalSkills || []);
        setProfessionalSkills(data.professionalSkills || []);
      });
  }, []);

  const renderSkill = (skill: Skill) => {
    const IconComponent = iconMap[skill.icon];
    return (
      <div
        key={skill.name}
        className="w-28 h-28 flex flex-col justify-center items-center text-center border border-blue-100 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out "
      >
        <div className="text-blue-300">
          {IconComponent ? <IconComponent size={40} /> : <span>❓</span>}
        </div>
        <p className="mt-2 text-sm font-medium">{skill.name}</p>
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen px-6 bg-white text-black py-7 scroll-mt-16">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-gray-900">Skills</h2>

      <div className="md:ml-12 mb-12">
        <h3 className="text-lg md:text-2xl font-semibold mb-8 ml-2 md:ml-6 text-gray-600 text-left">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center ml-4 md:ml-0">
          {technicalSkills.map(renderSkill)}
        </div>
      </div>

      <div className="md:ml-12">
        <h3 className="text-lg md:text-2xl font-semibold mb-8 ml-6 text-gray-600">Professional Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center ml-4 md:ml-0">
          {professionalSkills.map(renderSkill)}
        </div>
      </div>
    </section>
  );
}
