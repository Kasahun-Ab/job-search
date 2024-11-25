import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface JobSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalJobs: number;
}

export function JobSearch({ searchTerm, setSearchTerm, sortBy, setSortBy, totalJobs }: JobSearchProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search Job"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
            {sortBy}
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        {totalJobs} jobs found
      </div>
    </div>
  );
}