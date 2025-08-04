'use client';

import { useEffect, useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  ...FaIcons,
  ...SiIcons,
  ...TbIcons,
};

type Certification = {
  name: string;
  icon: string;
};

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch('/api/certifications')
      .then((res) => res.json())
      .then((data) => setCertifications(data.certifications || []));
  }, []);

  return (
    <section id="certifications" className="py-5 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-blue-900 flex items-center justify-center gap-2">
          <FaCertificate className="text-blue-900" />
          Certifications
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {certifications.map((cert, index) => {
          const Icon = iconMap[cert.icon];
          return (
            <div
              key={index}
              className="bg-white text-[#0f172a] border-l-4 border-purple-200 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-3"
            >
              <div className="mt-1 text-purple-400 text-xl">
                {Icon ? <Icon /> : <span>❓</span>}
              </div>
              <p className="text-sm font-medium leading-snug">{cert.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
