import { Trash2 } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  color: "black" | "green" | "orange" | "red";
}

function StatCard({ title, value, color }: StatCardProps) {
  const colorClasses = {
    black: "text-datalab-grey-darkest",
    green: "text-datalab-green",
    orange: "text-datalab-orange",
    red: "text-datalab-red",
  };

  return (
    <div className="flex flex-col items-start gap-4 flex-1 p-4 border-l border-datalab-grey-medium first:border-l-0">
      <span className="text-datalab-grey-darker text-sm font-normal">
        {title}
      </span>
      <span className={`text-4xl font-semibold ${colorClasses[color]}`}>
        {value}
      </span>
    </div>
  );
}

interface CampaignRowProps {
  name: string;
  stage: string;
  lastModified: string;
  modifiedBy: string;
}

function CampaignRow({
  name,
  stage,
  lastModified,
  modifiedBy,
}: CampaignRowProps) {
  return (
    <div className="flex h-14 items-center w-full border border-datalab-grey-lightest bg-white">
      <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
        <span className="text-datalab-grey-darkest text-sm font-normal">
          {name}
        </span>
      </div>
      <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
        <div className="flex px-3 py-1 justify-center items-center gap-2.5 rounded-full bg-datalab-grey-lighter">
          <span className="text-datalab-grey-darkest text-xs font-normal">
            {stage}
          </span>
        </div>
      </div>
      <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
        <span className="text-datalab-grey-darkest text-sm font-normal">
          {lastModified}
        </span>
      </div>
      <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
        <span className="text-datalab-grey-darkest text-sm font-normal">
          {modifiedBy}
        </span>
      </div>
      <div className="flex px-4 py-3 items-center gap-5 flex-1">
        <div className="flex items-center gap-1">
          <Trash2 className="w-6 h-6 text-datalab-red" />
        </div>
      </div>
    </div>
  );
}

export function DashboardContent() {
  const campaigns = [
    {
      name: "LTE3901",
      stage: "Metadata",
      lastModified: "08/08/2025",
      modifiedBy: "Skip",
    },
    {
      name: "MT3876",
      stage: "LOLUPD(2P)",
      lastModified: "08/08/2025",
      modifiedBy: "Skip",
    },
    {
      name: "M3991",
      stage: "1P Executed",
      lastModified: "08/08/2025",
      modifiedBy: "Skip",
    },
    {
      name: "BOG4006",
      stage: "2P Executed",
      lastModified: "08/08/2025",
      modifiedBy: "Nick",
    },
    {
      name: "LTH4007",
      stage: "Output Sent",
      lastModified: "08/08/2025",
      modifiedBy: "Nick",
    },
  ];

  return (
    <div className="flex h-screen p-4 flex-col items-start gap-4 flex-1">
      <div className="flex p-6 pt-6 pb-5 pr-5 flex-col items-start gap-8 flex-1 w-full rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center w-full rounded-lg">
          <h1 className="text-datalab-grey-darkest font-medium text-2xl">
            Print Campaigns
          </h1>
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 stroke-datalab-grey-medium border border-datalab-grey-medium rounded"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="3.5"
                stroke="#C6C6C6"
              />
              <path
                d="M13.6667 9.26667H10.2667C9.66551 9.26667 9.08897 9.50548 8.66389 9.93056C8.23881 10.3556 8 10.9322 8 11.5333V21.7333C8 22.3345 8.23881 22.911 8.66389 23.3361C9.08897 23.7612 9.66551 24 10.2667 24H20.4667C21.0678 24 21.6444 23.7612 22.0694 23.3361C22.4945 22.911 22.7333 22.3345 22.7333 21.7333V18.3333M18.2 10.4C18.2 11.3017 18.5582 12.1665 19.1958 12.8042C19.8335 13.4418 20.6983 13.8 21.6 13.8C22.5017 13.8 23.3665 13.4418 24.0042 12.8042C24.6418 12.1665 25 11.3017 25 10.4C25 9.49826 24.6418 8.63346 24.0042 7.99584C23.3665 7.35821 22.5017 7 21.6 7C20.6983 7 19.8335 7.35821 19.1958 7.99584C18.5582 8.63346 18.2 9.49826 18.2 10.4Z"
                stroke="#6B6B6B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-4 flex-1 w-full">
          {/* Filters and Actions */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2.5 w-full">
              <div className="flex px-5 justify-center items-center gap-2.5 rounded-md border border-datalab-grey-medium bg-white">
                <span className="text-datalab-grey-darkest text-sm font-medium py-2">
                  Filters
                </span>
              </div>

              <div className="flex h-7 px-2 pl-2 items-center gap-1 rounded border border-gray-400 bg-datalab-grey-lighter">
                <span className="text-datalab-grey-darkest text-xs font-normal">
                  LOLUPD (1P)
                </span>
              </div>

              <div className="flex h-7 px-2 pl-2 items-center gap-1 rounded border border-gray-400 bg-datalab-grey-lighter">
                <span className="text-datalab-grey-darkest text-xs font-normal">
                  Fresh
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 px-4 items-center gap-2.5 rounded-lg bg-datalab-green">
                <span className="text-white text-center text-sm font-normal">
                  + New Campaign
                </span>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="flex items-center w-full rounded-xl border border-datalab-grey-medium">
            <StatCard title="Total Campaigns" value="5" color="black" />
            <StatCard title="Metadata" value="1" color="green" />
            <StatCard title="LOLUPD(1P)" value="0" color="green" />
            <StatCard title="1P Executed" value="1" color="green" />
            <StatCard title="LOLUPD(2P)" value="1" color="green" />
            <StatCard title="2P Executed" value="1" color="orange" />
            <StatCard title="Output Sent" value="1" color="red" />
          </div>

          {/* Campaigns List */}
          <div className="flex h-[704px] p-4 flex-col items-start gap-4 w-full rounded-xl border border-datalab-grey-medium bg-white">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-datalab-grey-darkest font-medium text-lg">
                Campaigns List (5)
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-48 h-8 rounded-full bg-datalab-grey-lighter"></div>
                <div className="flex w-8 h-8 justify-center items-center gap-2.5 rounded-md bg-datalab-grey-lighter"></div>
                <div className="flex w-8 h-8 justify-center items-center gap-2.5 rounded-md bg-datalab-grey-lighter"></div>
              </div>
            </div>

            <div className="flex flex-col items-start flex-1 w-full">
              <div className="flex flex-col items-start w-full">
                {/* Table Header */}
                <div className="flex h-14 items-center w-full rounded-t-lg border border-datalab-grey-lightest bg-white">
                  <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
                    <span className="text-datalab-grey-darker text-sm font-semibold">
                      Name
                    </span>
                  </div>
                  <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
                    <span className="text-datalab-grey-darker text-sm font-semibold">
                      Stage
                    </span>
                  </div>
                  <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
                    <span className="text-datalab-grey-darker text-sm font-semibold">
                      Last modified
                    </span>
                  </div>
                  <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
                    <span className="text-datalab-grey-darker text-sm font-semibold">
                      Modified by
                    </span>
                  </div>
                  <div className="flex px-4 py-3 items-center gap-2.5 flex-1">
                    <span className="text-datalab-grey-darker text-sm font-semibold">
                      Actions
                    </span>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="flex flex-col items-start gap-2.5 w-full">
                  {campaigns.map((campaign, index) => (
                    <CampaignRow
                      key={index}
                      name={campaign.name}
                      stage={campaign.stage}
                      lastModified={campaign.lastModified}
                      modifiedBy={campaign.modifiedBy}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
