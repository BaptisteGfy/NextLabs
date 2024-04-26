import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center border-b bg-background">
      {/* Logo */}
      <span className="mx-5 my-2 flex items-center justify-around gap-2 rounded-sm p-2">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-blue-900  ">
          <Link href="/">
            <HomeIcon size={25} absoluteStrokeWidth />
          </Link>
        </div>
      </span>
      {/* Nav */}
      <span className="flex justify-around gap-5">
        <Link
          className="text-muted-foreground hover:text-foreground hover:underline"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground hover:underline"
          href="/games"
        >
          Games
        </Link>
      </span>
      {/* Theme Toggle */}
      <span className="ml-auto mr-5">
        <ThemeToggle />
      </span>
    </header>
  );
};
