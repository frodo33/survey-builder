"use client"
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { FileText, Eye, EyeOff, Mail, Lock } from "lucide-react";

import { AuthTopBar } from "@/components/layout/AuthTopBar/AuthTopBar.component";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useToast } from '@/hooks/use-toast';
// import { motion } from 'framer-motion';

export default function AuthLayout({ children }) {

  return (
    <div className="bg-background flex min-h-screen">
      <AuthTopBar />

      <div className="bg-primary relative hidden items-center justify-center overflow-hidden lg:flex lg:w-1/2">
        <div className="from-primary via-primary/90 to-primary/70 absolute inset-0 bg-gradient-to-br" />
        <div className="relative z-10 max-w-md px-8 text-center">
          <div className="bg-primary-foreground/20 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm">
            <FileText className="text-primary-foreground h-8 w-8" />
          </div>
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold">Welcome back to FormFlow</h2>
          <p className="text-primary-foreground/70 text-base leading-relaxed">
            Build beautiful surveys, collect responses, and analyze data — all in one place.
          </p>
        </div>

        <div className="bg-primary-foreground/5 absolute -bottom-20 -left-20 h-64 w-64 rounded-full" />
        <div className="bg-primary-foreground/5 absolute -top-10 -right-10 h-40 w-40 rounded-full" />
      </div>

      {children}
    </div>
  );
}