import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import {
  Table,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/Table";
import { FilterInput } from "./ui/Input";
import { PageContainer, PageHeader, StatsGrid } from "./layout/PageHeader";
import { NewCampaignModal } from "./NewCampaignModal";

interface Campaign {
  name: string;
  stage: string;
  lastModified: string;
  modifiedBy: string;
}

interface NewCampaignData {
  prefix: string;
  planName: string;
}

export function DashboardContent() {
  const [isNewCampaignModalOpen, setIsNewCampaignModalOpen] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([
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
  ]);

  const stats = [
    { title: "Total Campaigns", value: "5", color: "default" as const },
    { title: "Metadata", value: "1", color: "success" as const },
    { title: "LOLUPD(1P)", value: "0", color: "success" as const },
    { title: "1P Executed", value: "1", color: "success" as const },
    { title: "LOLUPD(2P)", value: "1", color: "success" as const },
    { title: "2P Executed", value: "1", color: "warning" as const },
    { title: "Output Sent", value: "1", color: "danger" as const },
  ];

  const handleDeleteCampaign = (campaignName: string) => {
    console.log(`Delete campaign: ${campaignName}`);
  };

  const handleNewCampaign = (data: NewCampaignData) => {
    // Add the new campaign to the list
    const newCampaign: Campaign = {
      name: data.planName,
      stage: "Metadata",
      lastModified: new Date().toLocaleDateString("en-US"),
      modifiedBy: "User",
    };

    setCampaigns(prev => [...prev, newCampaign]);
    console.log("New campaign created:", data);
  };

  const handleSaveDraft = (data: NewCampaignData) => {
    console.log("Campaign saved as draft:", data);
    // Could save to local storage or send to server as draft
  };

  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Print Campaigns"
        actions={
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
        }
      />

      <div className="flex flex-col items-start gap-4 flex-1 w-full">
        {/* Filters and Actions */}
        <div className="flex justify-between items-center w-full">
          <FilterInput filters={["LOLUPD (1P)", "Fresh"]} className="flex-1" />

          <div className="flex items-center gap-3">
            <Button
              variant="success"
              size="lg"
              onClick={() => setIsNewCampaignModalOpen(true)}
            >
              + New Campaign
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <StatsGrid stats={stats} />

        {/* Campaigns Table */}
        <TableContainer
          title="Campaigns List (5)"
          actions={
            <div className="flex items-center gap-2">
              <div className="w-48 h-8 rounded-full bg-datalab-grey-lighter"></div>
              <div className="flex w-8 h-8 justify-center items-center gap-2.5 rounded-md bg-datalab-grey-lighter"></div>
              <div className="flex w-8 h-8 justify-center items-center gap-2.5 rounded-md bg-datalab-grey-lighter"></div>
            </div>
          }
          className="flex-1"
        >
          <Table>
            <TableHeader>
              <TableRow hover={false}>
                <TableHead>Name</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Last modified</TableHead>
                <TableHead>Modified by</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign, index) => (
                <TableRow key={index}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>
                    <Badge variant="default" rounded>
                      {campaign.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>{campaign.lastModified}</TableCell>
                  <TableCell>{campaign.modifiedBy}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteCampaign(campaign.name)}
                      className="text-datalab-red hover:text-datalab-red hover:bg-datalab-red/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </PageContainer>
  );
}
