"use client";

import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
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
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent className="ml-[40%] flex h-full flex-col bg-stone-900">
          <DrawerClose className="mt-10">
            <X
              size={30}
              className="absolute right-5 top-5 rounded-full hover:text-yellow-400"
            />
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
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HamburgerNav;
