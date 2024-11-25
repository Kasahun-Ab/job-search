import React from 'react';
import { Edit3 } from 'lucide-react';

const skills = [
  { name: 'UI Design', experience: '1-2 years' },
  { name: 'UX Design', experience: '1-2 years' },
  { name: 'UX Research', experience: '1-2 years' }
];

export function Skills() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Top Skills</h3>
        <Edit3 className="h-4 w-4 text-gray-400" />
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-900">{skill.name}</span>
            <span className="text-xs text-gray-500">{skill.experience}</span>
          </div>
        ))}
      </div>
    </div>
  );
}