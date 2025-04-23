
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Performance", path: "/performance" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="flex w-full justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-finance-dark flex items-center">
                ALA
                <span className="text-kenya-gold ml-1">Capital</span>
              </span>
              <span className="text-xs text-muted-foreground">Premier Fund Management</span>
            </div>
          </Link>
          
          {!isMobile ? (
            <nav className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" className="bg-finance-primary hover:bg-finance-dark">
                Client Portal
              </Button>
            </nav>
          ) : (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  <svg
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3 5H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 12H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 19H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="px-7">
                  <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl font-bold tracking-tight text-finance-dark">
                      ALA<span className="text-kenya-gold">Capital</span>
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 text-base mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-7 py-2 font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="px-7 pt-4">
                    <Button className="w-full bg-finance-primary hover:bg-finance-dark">
                      Client Portal
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
