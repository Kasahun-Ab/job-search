import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  description: string;
  type: string;
  category: string;
  location: string;
  salary: string;
  period: string;
  applicants: number;
}

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start">
            <img className="h-12 w-12 rounded-lg" src={job.logo} alt="" />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Save job</button>
              </div>
              <p className="mt-1 text-sm text-gray-500">{job.company}</p>
              <p className="mt-2 text-sm text-gray-600">{job.description}</p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {job.type}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {job.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {job.location}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">{job.salary}</span>
                    <span className="text-gray-500">{job.period}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">{job.applicants} People applied</span>
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}