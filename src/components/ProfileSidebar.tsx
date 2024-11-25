import React from 'react';
import { Edit3 } from 'lucide-react';
import { WorkExperience } from './WorkExperience';
import { Skills } from './Skills';

export function ProfileSidebar() {
  return (
    <div className="w-80 flex-shrink-0">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces"
            alt=""
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-900">Andre Salmanan</h2>
          <p className="text-sm text-gray-500">Junior UI Designer</p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
            <Edit3 className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
        </div>
      </div>
      <WorkExperience />
      <Skills />
    </div>
  );
}