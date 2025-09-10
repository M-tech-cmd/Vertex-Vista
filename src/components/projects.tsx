import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Project Cygnus-X1",
    description: "An interactive journey through a procedurally generated galaxy, rendered in real-time with WebGPU.",
    imageUrl: "https://picsum.photos/seed/cygnus/600/400",
    imageHint: "galaxy space",
    tags: ["WebGPU", "React", "GLSL"],
  },
  {
    title: "Project Chimera",
    description: "A detailed 3D model of a futuristic cyborg, optimized for game engines with PBR textures.",
    imageUrl: "https://picsum.photos/seed/chimera/600/400",
    imageHint: "cyborg robot",
    tags: ["Blender", "Substance 3D", "GLTF"],
  },
  {
    title: "Project Overdrive",
    description: "A high-octane racing experience featuring physics-based vehicle dynamics and a retro-futuristic city.",
    imageUrl: "https://picsum.photos/seed/overdrive/600/400",
    imageHint: "cyberpunk city",
    tags: ["Three.js", "Cannon.js", "Synthwave"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          My Creations
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Here are some of the projects I've poured my creativity into. Each one is a unique piece of my journey as a developer.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col bg-card/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-primary/20 hover:border-primary/50">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex-grow">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </div>
              <CardFooter className="flex-col items-start gap-4 p-0 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="border-primary/50 bg-primary/20 text-primary hover:bg-primary/30">{tag}</Badge>
                  ))}
                </div>
                <Button variant="link" className="p-0 text-accent h-auto mt-4">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
