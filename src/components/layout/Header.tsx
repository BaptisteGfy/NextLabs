import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  return (
    <>
      <header className="relative flex items-center justify-center border-b border-border p-2">
        <p className="text-center">I&apos;m a Header</p>
        <span className="absolute right-2">
          <ThemeToggle />
        </span>
      </header>
    </>
  );
};
