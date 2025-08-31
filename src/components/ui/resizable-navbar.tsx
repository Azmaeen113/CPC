"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavbarContextType {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a Navbar");
  }
  return context;
};

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function Navbar({ children, className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "glass-card border-b border-white/10",
          className
        )}
      >
        {children}
      </nav>
    </NavbarContext.Provider>
  );
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function NavBody({ children, className }: NavBodyProps) {
  return (
    <div className={cn("container mx-auto px-4 py-4", className)}>
      <div className="flex items-center justify-between">
        {children}
      </div>
    </div>
  );
}

interface NavbarLogoProps {
  children?: React.ReactNode;
  className?: string;
}

export function NavbarLogo({ children, className }: NavbarLogoProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {children || (
        <>
          <div className="w-8 h-8 rounded-full bg-gradient-primary"></div>
          <span className="text-lg font-montserrat font-bold text-gradient">CPC</span>
        </>
      )}
    </div>
  );
}

interface NavItemsProps {
  items: Array<{
    name: string;
    link: string;
  }>;
  className?: string;
}

export function NavItems({ items, className }: NavItemsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("hidden md:flex items-center space-x-8", className)}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(item.link)}
          className="text-foreground/80 hover:text-primary transition-smooth"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

interface NavbarButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function NavbarButton({ 
  children, 
  variant = "primary", 
  onClick, 
  className 
}: NavbarButtonProps) {
  const baseClasses = "font-semibold transition-smooth";
  
  const variantClasses = {
    primary: "gradient-primary text-white hover:glow-effect",
    secondary: "border-primary/30 text-primary hover:bg-primary/10 border"
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        "px-4 py-2 rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNav({ children, className }: MobileNavProps) {
  return (
    <div className={cn("md:hidden", className)}>
      {children}
    </div>
  );
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNavHeader({ children, className }: MobileNavHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
    </div>
  );
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileNavToggle({ isOpen, onClick, className }: MobileNavToggleProps) {
  return (
    <button
      onClick={onClick}
      className={cn("text-foreground", className)}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function MobileNavMenu({ children, isOpen, onClose, className }: MobileNavMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={cn("mt-4 p-4 glass-card rounded-lg border border-white/10", className)}>
      {children}
    </div>
  );
}
