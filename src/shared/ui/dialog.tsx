import { type ReactNode } from "react";
import { createPortal } from "react-dom";

import { cn } from "../../shared/lib/cn";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ open, onClose, children }: DialogProps) {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-lg rounded-xl border border-zinc-800",
          "bg-zinc-950 p-6 shadow-2xl animate-in fade-in zoom-in-95",
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
