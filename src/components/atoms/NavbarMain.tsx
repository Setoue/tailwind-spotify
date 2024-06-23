import { HomeIcon, Search, LibraryIcon } from "lucide-react";

export const NavbarMain = () => (
  <nav className="space-y-5 mt-10">
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-90"
    >
      <HomeIcon />
      Home
    </a>
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-90"
    >
      <Search />
      Search
    </a>
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-90"
    >
      <LibraryIcon />
      Your Library
    </a>
  </nav>
);
