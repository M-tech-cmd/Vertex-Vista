import { Button } from "@/components/ui/button";
import ScenePlaceholder from "@/components/scene-placeholder";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-3.5rem)] overflow-hidden">
      <ScenePlaceholder />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-300 to-primary py-2 animate-glow">
            Synthesizing Digital Dimensions
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-neutral-200 md:text-xl my-6">
            A bleeding-edge portfolio of hyper-realistic 3D models and immersive WebGPU experiences. Welcome to the new reality.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 transition-all duration-300 hover:shadow-primary/60 hover:scale-105">
              Explore The Grid
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent-foreground bg-accent hover:bg-accent/90 hover:text-accent-foreground shadow-lg shadow-accent/40 transition-all duration-300 hover:shadow-accent/60 hover:scale-105">
              Initiate Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
