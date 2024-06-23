import {
  Play,
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export const Footer = () => (
  <footer className="bg-zinc-900 border-t border-zinc-700 px-5 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3 ">
      <Image
        alt="kendrick-euphoria-album"
        width={56}
        height={56}
        src="/kendrick.jpg"
      />
      <div className="flex flex-col">
        <strong className="font-normal">Euphoria</strong>
        <span className="text-xs text-zinc-400">Kendrick Lamar</span>
      </div>
      <div className=" group">
        <Heart className="w-4 h-4 text-white group-hover:text-pink-600" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack fill="true" size={20} className="text-zinc-200" />
        <button className=" w-8 h-8 flex items-center justify-center p-2 pr-1.5 rounded-full bg-white text-black ml-auto">
          <Play fill="true" />
        </button>
        <SkipForward fill="true" size={20} className="text-zinc-200" />
        <Repeat size={20} className="text-zinc-200" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">0:31</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="h-1 rounded-full bg-zinc-200 w-40"></div>
        </div>
        <span className="text-xs text-zinc-400">6:21</span>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className="flex items-center gap-2">
        <Volume size={20} />
        <div className="h-1 rounded-full w-20 bg-zinc-600">
          <div className="h-1 rounded-full bg-zinc-200 w-10" />
        </div>
        <Maximize2 size={20} />
      </div>
    </div>
  </footer>
);
