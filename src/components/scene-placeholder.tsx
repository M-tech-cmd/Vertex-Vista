import { Move, ZoomIn, ZoomOut, RotateCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ScenePlaceholder() {
  const controls = [
    { icon: Move, label: "Move" },
    { icon: ZoomIn, label: "Zoom In" },
    { icon: ZoomOut, label: "Zoom Out" },
    { icon: RotateCw, label: "Rotate" },
    { icon: Search, label: "Inspect" },
  ];

  return (
    <div className="absolute inset-0 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15)_0%,transparent_70%)]"></div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-muted-foreground/20">
          <h2 className="text-2xl font-headline">[ 3D Interactive Environment ]</h2>
          <p className="mt-2">An immersive 3D world will come to life here.</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <TooltipProvider>
          <div className="flex items-center gap-2 p-2 bg-background/50 border border-border rounded-lg backdrop-blur-sm shadow-2xl">
            {controls.map((control) => (
              <Tooltip key={control.label}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={control.label}>
                    <control.icon className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{control.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
