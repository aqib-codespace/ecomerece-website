"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { CheckCircle2, XCircle, AlertTriangle, Info } from "lucide-react";

const toastIcons = {
  success: CheckCircle2,
  destructive: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const iconStyles = {
  success: "bg-orange-100 text-[#FF6B35] ring-orange-200",
  destructive: "bg-red-100 text-red-600 ring-red-200",
  warning: "bg-amber-100 text-amber-600 ring-amber-200",
  info: "bg-blue-100 text-blue-600 ring-blue-200",
  default: "bg-orange-100 text-[#FF6B35] ring-orange-200",
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }) {
        const Icon = variant ? toastIcons[variant] : CheckCircle2;
        const iconStyle = iconStyles[variant] || iconStyles.default;

        return (
          <Toast key={id} variant={variant} {...props}>
            <div
              className={`flex-shrink-0 rounded-full p-2 ring-4 ${iconStyle}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 grid gap-0.5">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
