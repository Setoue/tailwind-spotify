import { ControlButton } from "../atoms/ControlButton";
import { NavbarMain } from "../atoms/NavbarMain";

export const Sidebar = () => (
  <aside className="w-72 bg-zinc-950 p-6">
    <ControlButton />
    <NavbarMain />
    <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        Hot Hits Brazil
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        Aniver Funk
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        My Playlist
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        Top Brazil
      </a>
    </nav>
  </aside>
);
