'use client';

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { IconType } from 'react-icons';

type IconName = keyof typeof FaIcons | keyof typeof SiIcons;

const iconsMap: Record<string, IconType> = {
  ...FaIcons,
  ...SiIcons,
};

export default function IconComponent({ iconName }: { iconName: string }) {
  const Icon = iconsMap[iconName];
  if (!Icon) return <span className="text-red-500">?</span>; // fallback if icon not found

  return <Icon className="text-purple-600 text-2xl" />;
}
