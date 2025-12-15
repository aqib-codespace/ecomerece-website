"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, href, children, ...props }, ref) => {
    const pathname = usePathname();
    const dest = href || to || "/";
    const isActive = pathname === dest;

    return (
      <Link ref={ref} href={dest} className={cn(className, isActive && activeClassName)} {...props}>
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
