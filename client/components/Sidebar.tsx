import { Search } from "lucide-react";

export function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-start w-72 h-screen p-4 pl-4 pr-0 bg-datalab-grey-light">
      <div className="flex flex-col items-start gap-6 w-full">
        {/* DataLab Header */}
        <div className="flex h-[52px] px-4 flex-col justify-center items-start gap-2.5 w-full rounded-lg bg-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex w-10 h-10 flex-col justify-center items-center gap-2.5 rounded-lg bg-datalab-primary">
              <span className="text-datalab-primary-dark font-medium text-xl -tracking-wider">D</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-0.5">
              <span className="text-datalab-brand-dark font-medium text-base -tracking-wide">DataLab</span>
            </div>
          </div>
          <div className="flex w-8 h-8 p-1 justify-center items-center absolute right-4 top-2.5 opacity-60">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M2 12C2 8.25027 2 6.3754 2.95491 5.06107C3.26331 4.6366 3.6366 4.26331 4.06107 3.95491C5.3754 3 7.25027 3 11 3H13C16.7497 3 18.6246 3 19.9389 3.95491C20.3634 4.26331 20.7367 4.6366 21.0451 5.06107C22 6.3754 22 8.25027 22 12C22 15.7497 22 17.6246 21.0451 18.9389C20.7367 19.3634 20.3634 19.7367 19.9389 20.0451C18.6246 21 16.7497 21 13 21H11C7.25027 21 5.3754 21 4.06107 20.0451C3.6366 19.7367 3.26331 19.3634 2.95491 18.9389C2 17.6246 2 15.7497 2 12Z" 
                stroke="#141B34" 
                strokeWidth="1.8" 
                strokeLinejoin="round"
              />
              <path 
                d="M9.5 3.5L9.5 20.5" 
                stroke="#141B34" 
                strokeWidth="1.8" 
                strokeLinejoin="round"
              />
              <path 
                d="M5 7C5 7 5.91421 7 6.5 7" 
                stroke="#141B34" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M5 11H6.5" 
                stroke="#141B34" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M17 10L15.7735 11.0572C15.2578 11.5016 15 11.7239 15 12C15 12.2761 15.2578 12.4984 15.7735 12.9428L17 14" 
                stroke="#141B34" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex h-9 px-4 pl-2 items-center gap-2 w-full rounded-lg bg-datalab-grey-lighter">
          <Search className="w-6 h-6 text-gray-400" />
          <span className="text-datalab-grey-dark text-sm font-normal">Search</span>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col items-start gap-3 w-full border-b border-datalab-grey-lighter pb-4">
          {/* Dashboard */}
          <div className="flex h-9 px-4 items-center gap-3 w-full rounded-lg bg-datalab-grey-light">
            <span className="text-datalab-grey-darker text-sm font-normal">Dashboard</span>
          </div>

          {/* Campaigns Section */}
          <span className="text-datalab-brand-dark text-xs font-medium tracking-wider uppercase opacity-40 px-4">
            CAMPAIGNS
          </span>

          {/* Print - Active */}
          <div className="flex h-9 px-4 items-center gap-3 w-full rounded-md bg-datalab-green-dark shadow-lg">
            <span className="text-datalab-brand-white text-sm font-medium">Print</span>
          </div>

          {/* Other Navigation Items */}
          <div className="flex h-9 px-4 items-center gap-3 w-full rounded-lg bg-datalab-grey-light">
            <span className="text-datalab-grey-darker text-sm font-normal">Social Media</span>
          </div>

          <div className="flex h-9 px-4 items-center gap-3 w-full rounded-lg bg-datalab-grey-light">
            <span className="text-datalab-grey-darker text-sm font-normal">Email</span>
          </div>

          <div className="flex h-9 px-4 items-center gap-3 w-full rounded-lg bg-datalab-grey-light">
            <span className="text-datalab-grey-darker text-sm font-normal">Reports</span>
          </div>
        </div>

        {/* Settings Section */}
        <div className="flex flex-col items-start gap-3 w-full border-b border-datalab-grey-lighter pb-4">
          <span className="text-datalab-brand-dark text-xs font-medium tracking-wider uppercase opacity-40 px-4">
            SETTINGS
          </span>
          
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-9 px-4 justify-between items-center w-full rounded-lg bg-datalab-grey-light"></div>
            <div className="flex h-9 px-4 justify-between items-center w-full rounded-lg bg-datalab-grey-light"></div>
            <div className="flex h-9 px-4 justify-between items-center w-full rounded-lg bg-datalab-grey-light"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
