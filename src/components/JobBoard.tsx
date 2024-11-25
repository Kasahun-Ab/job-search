import React, { useState } from "react";
// import { useMediaQuery } from 'react-responsive';
import { Menu } from "lucide-react";
import { ProfileSidebar } from "./ProfileSidebar";
import { JobSearch } from "./JobSearch";
import { JobList } from "./JobList";
import { JobFilters } from "./JobFilters";
import { GoogleAd } from "./GoogleAd";
import { jobs } from "../data/jobs";

export function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Menu className="h-5 w-5 mr-2" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Sidebar - Hidden on mobile, shown as drawer */}
        <div
          className={`
          fixed inset-0 z-40 lg:relative lg:block lg:w-80
          transform transition-transform duration-300 ease-in-out
          ${
            showMobileMenu
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          bg-white lg:bg-transparent overflow-y-auto
        `}
        >
          <ProfileSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <JobSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalJobs={jobs.length}
          />

          {/* Top Ad Slot */}
          <div className="mb-6">
            <GoogleAd slot="1234567890" className="min-h-[90px]" />
          </div>

          <JobList jobs={jobs} />

          {/* Bottom Ad Slot */}
          <div className="mt-6">
            <GoogleAd slot="0987654321" className="min-h-[90px]" />
          </div>
        </div>

        {/* Filters - Hidden on mobile, shown as drawer */}
        <div
          className={`
          fixed inset-y-0 right-0 z-40 w-80 lg:relative lg:block
          transform transition-transform duration-300 ease-in-out
          ${showFilters ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
          bg-white lg:bg-transparent overflow-y-auto
        `}
        >
          <JobFilters />
        </div>
      </div>

      {/* Overlay for mobile drawers */}
      {(showMobileMenu || showFilters) && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => {
            setShowMobileMenu(false);
            setShowFilters(false);
          }}
        />
      )}
    </div>
  );
}
