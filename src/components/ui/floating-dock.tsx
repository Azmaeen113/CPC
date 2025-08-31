import React from "react";
import { cn } from "@/lib/utils";

interface FloatingDockProps {
  items: Array<{
    title: string;
    icon: React.ReactNode;
    href: string;
  }>;
  className?: string;
  mobileClassName?: string;
}

export function FloatingDock({ items, className, mobileClassName }: FloatingDockProps) {
  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
        "flex items-center gap-2 px-4 py-2",
        "bg-white/10 backdrop-blur-md border border-white/20 rounded-full",
        "shadow-lg",
        mobileClassName,
        className
      )}
    >
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full",
            "bg-white/5 hover:bg-white/20 transition-all duration-300",
            "hover:scale-110 active:scale-95",
            "group relative"
          )}
          title={item.title}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {item.icon}
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {item.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
