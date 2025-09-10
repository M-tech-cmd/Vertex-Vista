import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-current"><rect width="256" height="256" fill="none"/><path d="M128,24a104,104,0,0,0,0,208c57.4,0,104-46.6,104-104S185.4,24,128,24Zm0,192a88,88,0,0,1,0-176c48.6,0,88,39.4,88,88S176.6,216,128,216Zm-29.3-56.6,20-34.6a8,8,0,0,1,13.8,8l-20,34.6a8,8,0,1,1-13.8-8Zm58.6,0-20-34.6a8,8,0,0,1,13.8-8l20,34.6a8,8,0,1,1-13.8,8Z" /></svg>
            <span className="font-bold sm:inline-block font-headline">Vertex Vista</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
