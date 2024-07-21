"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  className: string;
  navItems: {
    name: string;
    link: string;
  }[];
}
const HamburgerNav = ({ className, navItems }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Menu
        className="hover:cursor-pointer hover:text-yellow-400"
        onClick={() => setOpen(true)}
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <nav className="mt-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-3 py-1 font-medium hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                <span className="mr-1">{index}.</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerNav;
