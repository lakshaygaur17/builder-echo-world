import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalHeader, ModalContent, ModalFooter } from "./ui/Modal";
import { Select } from "./ui/Select";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface NewCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewCampaignData) => void;
  onSaveDraft: (data: NewCampaignData) => void;
}

interface NewCampaignData {
  prefix: string;
  planName: string;
}

const prefixOptions = [
  { value: "BOG", label: "BOG" },
  { value: "MT", label: "MT" },
  { value: "M", label: "M" },
  { value: "LTE", label: "LTE" }
];

export function NewCampaignModal({
  isOpen,
  onClose,
  onSubmit,
  onSaveDraft
}: NewCampaignModalProps) {
  const navigate = useNavigate();
  const [selectedPrefix, setSelectedPrefix] = useState<string>("");
  const [planName, setPlanName] = useState<string>("");
  const [errors, setErrors] = useState<{ prefix?: string; planName?: string }>({});

  // Auto-generate plan name when prefix is selected
  useEffect(() => {
    if (selectedPrefix) {
      // Generate a random 4-digit number for the plan name
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const generatedName = `${selectedPrefix}${randomNumber}`;
      setPlanName(generatedName);
      
      // Clear any previous errors
      setErrors(prev => ({ ...prev, prefix: undefined, planName: undefined }));
    } else {
      setPlanName("");
    }
  }, [selectedPrefix]);

  const validateForm = () => {
    const newErrors: { prefix?: string; planName?: string } = {};
    
    if (!selectedPrefix) {
      newErrors.prefix = "Please select a prefix";
    }
    
    if (!planName.trim()) {
      newErrors.planName = "Plan name is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({
        prefix: selectedPrefix,
        planName: planName.trim()
      });

      // Navigate to the campaign detail page
      navigate(`/campaign/${planName.trim()}`);
      handleClose();
    }
  };

  const handleSaveDraft = () => {
    // Save draft doesn't require full validation
    onSaveDraft({
      prefix: selectedPrefix,
      planName: planName.trim()
    });
    handleClose();
  };

  const handleClose = () => {
    // Reset form when closing
    setSelectedPrefix("");
    setPlanName("");
    setErrors({});
    onClose();
  };

  const isFormValid = selectedPrefix && planName.trim();

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <ModalHeader onClose={handleClose}>
        <h2 className="text-lg font-medium text-datalab-grey-darkest">
          New Print Campaign
        </h2>
      </ModalHeader>

      <ModalContent>
        <div className="space-y-6">
          <p className="text-sm text-datalab-grey-dark">
            Please select Plan Name Prefix to generate Plan Name and create Campaign.
          </p>

          <div className="space-y-4">
            <Select
              label="Plan Name Prefix*"
              options={prefixOptions}
              value={selectedPrefix}
              onValueChange={setSelectedPrefix}
              placeholder="Select"
              error={errors.prefix}
              fullWidth
            />

            <Input
              label="Plan Name"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              placeholder={selectedPrefix ? "Plan name will be generated" : "Please select prefix to generate"}
              error={errors.planName}
              fullWidth
              disabled={!selectedPrefix}
            />
          </div>
        </div>
      </ModalContent>

      <ModalFooter>
        <Button
          variant="outline"
          onClick={handleSaveDraft}
          disabled={!selectedPrefix && !planName.trim()}
        >
          Save as Draft
        </Button>
        <Button
          variant="success"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Next
        </Button>
      </ModalFooter>
    </Modal>
  );
}
