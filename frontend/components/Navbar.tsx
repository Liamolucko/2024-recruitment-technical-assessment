import {
  ArrowRightEndOnRectangleOutline,
  BookOpenOutline,
  BarsArrowUpOutline,
  MoonOutline,
  ShieldCheckOutline,
  UserCircleOutline,
} from "preact-heroicons";
import { JSX } from "preact";

function NavButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <a
      href={href}
      className={
        "m-2 flex h-8 w-8 items-center justify-center object-none " + className
      }
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const links = [
    { href: "https://example.com", label: <img src="/unilectives.svg" /> },
  ];
  return (
    <nav className="flex h-full w-20 flex-col gap-3 bg-gray-50 p-4 pb-10">
      <NavButton href="https://example.com">
        <img src="/unilectives.svg" />
      </NavButton>
      <span className="h-0.5 bg-gray-200" />
      <NavButton href="https://example.com">
        <BookOpenOutline className="h-6 w-6" />
      </NavButton>
      <NavButton href="https://example.com">
        <ShieldCheckOutline className="h-6 w-6" />
      </NavButton>
      <NavButton href="https://example.com" className="mt-auto">
        <BarsArrowUpOutline className="h-6 w-6" rotate-90 />
      </NavButton>
      <NavButton href="https://example.com">
        <UserCircleOutline className="h-6 w-6" />
      </NavButton>
      <NavButton href="https://example.com">
        <MoonOutline className="h-6 w-6" />
      </NavButton>
      <NavButton href="https://example.com">
        <ArrowRightEndOnRectangleOutline className="h-6 w-6" />
      </NavButton>
    </nav>
  );
}
