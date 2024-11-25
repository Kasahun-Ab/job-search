import React from 'react';
import { Edit3 } from 'lucide-react';

const workExperience = [
  {
    company: 'Airbnb, Inc.',
    position: 'Junior UI Designer',
    duration: '2 Mos',
    type: 'Fulltime',
    logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=48&h=48&fit=crop&crop=faces'
  },
  {
    company: 'Line Corporation',
    position: 'Intern UI Designer',
    duration: '2 Mos',
    type: 'Intern',
    logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=48&h=48&fit=crop&crop=faces'
  }
];

export function WorkExperience() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Work Experience</h3>
        <Edit3 className="h-4 w-4 text-gray-400" />
      </div>
      <div className="space-y-4">
        {workExperience.map((job, index) => (
          <div key={index} className="flex items-start">
            <img className="h-10 w-10 rounded-lg" src={job.logo} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{job.position}</p>
              <p className="text-xs text-gray-500">{job.company} • {job.type}</p>
              <p className="text-xs text-gray-400">{job.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}