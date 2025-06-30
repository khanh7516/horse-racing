"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-[#2C2F33] border-b border-[#40444B]">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-[#F39C12]">
          <img
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=40&h=40&fit=crop&q=80"
            alt="Horse racing logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white text-xl font-bold">U.S.Racing</span>
      </div>

      <div className="flex items-center gap-8">
        <nav className="flex gap-8 text-[#99AAB5] text-sm font-medium">
          <a
            href="#"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Insights
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Meparent
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Peupinet
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Races
          </a>
        </nav>

        <Button className="bg-[#27AE60] hover:bg-[#229954] text-white font-semibold rounded-lg px-6 py-2.5 text-sm shadow-md">
          Cast Schedule
        </Button>

        <div className="relative">
          <Input
            className="bg-[#23272A] border-[#40444B] text-white placeholder:text-[#99AAB5] w-52 h-10 pr-12 rounded-lg focus:border-[#27AE60] focus:ring-1 focus:ring-[#27AE60]"
            placeholder="Search"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#99AAB5] w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
