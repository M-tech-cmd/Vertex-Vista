import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-current"><rect width="256" height="256" fill="none"/><path d="M128,24a104,104,0,0,0,0,208c57.4,0,104-46.6,104-104S185.4,24,128,24Zm0,192a88,88,0,0,1,0-176c48.6,0,88,39.4,88,88S176.6,216,128,216Zm-29.3-56.6,20-34.6a8,8,0,0,1,13.8,8l-20,34.6a8,8,0,1,1-13.8-8Zm58.6,0-20-34.6a8,8,0,0,1,13.8-8l20,34.6a8,8,0,1,1-13.8,8Z" /></svg>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Vertex Vista. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-1">
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
    </footer>
  );
}
