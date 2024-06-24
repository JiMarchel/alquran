"use client";
import { HandHeart, Menu, MoonStar } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackToTopButton } from "./back-to-top-button";
import { ThemeSwitcher } from "./theme-switcher";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const path = [
    {
      path: "/al-quran",
      icon: <MoonStar className="text-primary" />,
      name: "Al-Quran",
    },
    {
      path: "/sehari-hari",
      icon: <HandHeart className="text-primary" />,
      name: "Doa sehari-hari",
    },
  ] as const

  const title = pathname.split("/")[1]

  return (
    <div className="py-2 px-3  sticky mb-5 inset-x-0 top-0 w-full backdrop-blur-lg transition-all flex justify-between z-20 ">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
            <Menu className="text-primary" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-between py-10">
          <SheetHeader className="space-y-4 mb-4">
            <SheetTitle>
              <div className="flex items-center gap-2">
                <MoonStar className="text-primary" />
                <h1 className="text-xl font-medium">{title[0].toUpperCase() + title.slice(1)}</h1>
              </div>
            </SheetTitle>
            <Separator />
            <SheetDescription asChild>
              <div className="space-y-4">
                <h1 className="text-gray-400 text-start text-xl font-medium">
                  Main
                </h1>
                <div className="space-y-1">
                  {path.map((e) => (
                    <Link
                      onClick={() => setOpen(false)}
                      key={e.path}
                      href={e.path}
                      className={`flex items-center gap-2 hover:bg-secondary py-2 px-2 rounded ${pathname.includes(e.path) && "text-primary bg-primary/10"}`}
                    >
                      {e.icon}
                      <p className="font-medium">{e.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <div className="space-y-4">

              <ThemeSwitcher />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <BackToTopButton />
    </div>
  );
}
