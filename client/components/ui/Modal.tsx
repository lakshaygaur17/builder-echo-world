import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

interface ModalHeaderProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

const modalSizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export function Modal({ isOpen, onClose, children, size = "md" }: ModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className={cn(
          "relative bg-white rounded-lg shadow-2xl w-full mx-4",
          modalSizes[size],
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({
  children,
  onClose,
  className,
}: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-6 border-b border-datalab-grey-lightest",
        className,
      )}
    >
      <div className="flex-1">{children}</div>
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="p-1 h-8 w-8 text-datalab-grey-dark hover:text-datalab-grey-darkest"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}

export function ModalContent({ children, className }: ModalContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 p-6 border-t border-datalab-grey-lightest",
        className,
      )}
    >
      {children}
    </div>
  );
}
