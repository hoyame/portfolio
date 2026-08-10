"use client";

import { PrinterIcon } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium shadow-lg transition-colors hover:bg-muted"
    >
      <PrinterIcon className="size-3.5" />
      Imprimer / PDF
    </button>
  );
}
