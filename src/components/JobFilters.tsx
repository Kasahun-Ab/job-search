import React from 'react';

export function JobFilters() {
  return (
    <div className="w-80 flex-shrink-0">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Job Filter</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700">Clear all</button>
        </div>

        <div className="space-y-6">
          {/* Experience Level */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Experience Level</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Entry Level</span>
                <span className="ml-auto text-xs text-gray-500">256 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Intermediate</span>
                <span className="ml-auto text-xs text-gray-500">124 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Expert</span>
                <span className="ml-auto text-xs text-gray-500">2404 jobs</span>
              </label>
            </div>
          </div>

          {/* Job Location */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Job Location</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">On site</span>
                <span className="ml-auto text-xs text-gray-500">255 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Remote</span>
                <span className="ml-auto text-xs text-gray-500">124 jobs</span>
              </label>
            </div>
          </div>

          {/* Job Type */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Job Type</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Full Time</span>
                <span className="ml-auto text-xs text-gray-500">255 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Freelance</span>
                <span className="ml-auto text-xs text-gray-500">124 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Part Time</span>
                <span className="ml-auto text-xs text-gray-500">2404 jobs</span>
              </label>
            </div>
          </div>

          {/* Applicants */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Applicants</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">Less than 10</span>
                <span className="ml-auto text-xs text-gray-500">255 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">10 to 50</span>
                <span className="ml-auto text-xs text-gray-500">2404 jobs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-3 text-sm text-gray-700">50 to 100</span>
                <span className="ml-auto text-xs text-gray-500">2404 jobs</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}