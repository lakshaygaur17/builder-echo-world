import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical, Bookmark } from "lucide-react";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { DateInput } from "../components/ui/DatePicker";
import { HorizontalTabs, HorizontalTab } from "../components/ui/Tabs";

interface CampaignDetailProps {
  campaignId?: string;
}

export default function CampaignDetail({
  campaignId: propCampaignId,
}: CampaignDetailProps = {}) {
  const params = useParams();
  const navigate = useNavigate();
  const campaignId = propCampaignId || params.id || "BOG5101";

  const [activeTab, setActiveTab] = useState("metadata");
  const [formData, setFormData] = useState({
    planNamePrefix: "BOG",
    issueYear: "2025",
    issueMonth: "AUG",
    mailDate: "",
    selectionDate: "",
    executionDate: "",
    description: "",
    productLine: "Book",
    entity: "US",
    bookCostCenter: "BEST OF RD - DG",
    source: "D - Direct Mail",
    bookSubChannel: "F - BOUNCEBACK, CHEC...",
  });

  const prefixOptions = [
    { value: "BOG", label: "BOG" },
    { value: "MT", label: "MT" },
    { value: "M", label: "M" },
    { value: "LTE", label: "LTE" },
  ];

  const yearOptions = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    return { value: year.toString(), label: year.toString() };
  });

  const monthOptions = [
    { value: "JAN", label: "JAN" },
    { value: "FEB", label: "FEB" },
    { value: "MAR", label: "MAR" },
    { value: "APR", label: "APR" },
    { value: "MAY", label: "MAY" },
    { value: "JUN", label: "JUN" },
    { value: "JUL", label: "JUL" },
    { value: "AUG", label: "AUG" },
    { value: "SEP", label: "SEP" },
    { value: "OCT", label: "OCT" },
    { value: "NOV", label: "NOV" },
    { value: "DEC", label: "DEC" },
  ];

  const productLineOptions = [
    { value: "Book", label: "Book" },
    { value: "Magazine", label: "Magazine" },
    { value: "Digital", label: "Digital" },
  ];

  const entityOptions = [
    { value: "US", label: "US" },
    { value: "CA", label: "CA" },
    { value: "UK", label: "UK" },
  ];

  const costCenterOptions = [
    { value: "BEST OF RD - DG", label: "BEST OF RD - DG" },
    { value: "PREMIUM - DG", label: "PREMIUM - DG" },
    { value: "STANDARD - DG", label: "STANDARD - DG" },
  ];

  const sourceOptions = [
    { value: "D - Direct Mail", label: "D - Direct Mail" },
    { value: "E - Email", label: "E - Email" },
    { value: "W - Web", label: "W - Web" },
  ];

  const subChannelOptions = [
    { value: "F - BOUNCEBACK, CHEC...", label: "F - BOUNCEBACK, CHEC..." },
    { value: "G - ACQUISITION", label: "G - ACQUISITION" },
    { value: "H - RENEWAL", label: "H - RENEWAL" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submit campaign:", formData);
  };

  const handleSave = () => {
    console.log("Save campaign:", formData);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DashboardLayout>
      <div className="flex h-screen p-4 flex-col items-start gap-4 flex-1">
        <div className="flex p-6 flex-col items-start gap-6 flex-1 w-full rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="p-2"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-datalab-grey-darkest font-medium text-2xl">
                {campaignId}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <HorizontalTabs value={activeTab} onValueChange={setActiveTab}>
            <HorizontalTab value="metadata">Metadata</HorizontalTab>
            <HorizontalTab value="lolupd1p">LOLUPD (1P)</HorizontalTab>
            <HorizontalTab value="firstpass">First-Pass</HorizontalTab>
            <HorizontalTab value="lolupd2p">LOLUPD (2P)</HorizontalTab>
            <HorizontalTab value="secondpass">Second-Pass</HorizontalTab>
            <HorizontalTab value="reports">Reports</HorizontalTab>
          </HorizontalTabs>

          {/* Content */}
          <div className="flex flex-col gap-6 flex-1 w-full">
            {activeTab === "metadata" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-datalab-grey-darkest mb-2">
                    Metadata
                  </h2>
                  <p className="text-sm text-datalab-grey-dark mb-6">
                    Once Metadata is saved, the Plan Name cannot be edited
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Select
                    label="Plan Name Prefix*"
                    options={prefixOptions}
                    value={formData.planNamePrefix}
                    onValueChange={(value) =>
                      handleInputChange("planNamePrefix", value)
                    }
                    fullWidth
                  />

                  <Select
                    label="Issue year*"
                    options={yearOptions}
                    value={formData.issueYear}
                    onValueChange={(value) =>
                      handleInputChange("issueYear", value)
                    }
                    fullWidth
                  />

                  <Select
                    label="Issue month*"
                    options={monthOptions}
                    value={formData.issueMonth}
                    onValueChange={(value) =>
                      handleInputChange("issueMonth", value)
                    }
                    fullWidth
                  />

                  <DateInput
                    label="Mail date*"
                    value={formData.mailDate}
                    onChange={(e) =>
                      handleInputChange("mailDate", e.target.value)
                    }
                    fullWidth
                  />

                  <DateInput
                    label="Selection date*"
                    value={formData.selectionDate}
                    onChange={(e) =>
                      handleInputChange("selectionDate", e.target.value)
                    }
                    fullWidth
                  />

                  <DateInput
                    label="Execution date*"
                    value={formData.executionDate}
                    onChange={(e) =>
                      handleInputChange("executionDate", e.target.value)
                    }
                    fullWidth
                  />
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-datalab-grey-darker mb-1">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Type here"
                      rows={4}
                      className="flex w-full px-3 py-2 text-sm bg-white border border-datalab-grey-medium rounded-lg placeholder:text-datalab-grey-dark focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Select
                    label="Product line*"
                    options={productLineOptions}
                    value={formData.productLine}
                    onValueChange={(value) =>
                      handleInputChange("productLine", value)
                    }
                    fullWidth
                  />

                  <Select
                    label="Entity*"
                    options={entityOptions}
                    value={formData.entity}
                    onValueChange={(value) =>
                      handleInputChange("entity", value)
                    }
                    fullWidth
                  />

                  <Select
                    label="Book cost center*"
                    options={costCenterOptions}
                    value={formData.bookCostCenter}
                    onValueChange={(value) =>
                      handleInputChange("bookCostCenter", value)
                    }
                    fullWidth
                  />

                  <Select
                    label="Source*"
                    options={sourceOptions}
                    value={formData.source}
                    onValueChange={(value) =>
                      handleInputChange("source", value)
                    }
                    fullWidth
                  />

                  <Select
                    label="Book sub channel*"
                    options={subChannelOptions}
                    value={formData.bookSubChannel}
                    onValueChange={(value) =>
                      handleInputChange("bookSubChannel", value)
                    }
                    fullWidth
                  />
                </div>
              </div>
            )}

            {activeTab !== "metadata" && (
              <div className="flex items-center justify-center h-64">
                <p className="text-datalab-grey-dark">
                  Content for {activeTab} tab coming soon...
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex justify-end gap-3 w-full pt-6 border-t border-datalab-grey-lightest">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
