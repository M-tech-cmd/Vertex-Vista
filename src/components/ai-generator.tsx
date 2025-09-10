"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generate3DModelDescription, Generate3DModelDescriptionInput } from "@/ai/flows/generate-3d-model-description";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  modelName: z.string().min(2, { message: "Model name must be at least 2 characters." }),
  modelType: z.string().min(2, { message: "Model type must be at least 2 characters." }),
  modelDetails: z.string().min(10, { message: "Details must be at least 10 characters." }),
});

export default function AiGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      modelName: "",
      modelType: "",
      modelDetails: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedDescription("");
    try {
      const result = await generate3DModelDescription(values as Generate3DModelDescriptionInput);
      setGeneratedDescription(result.description);
    } catch (error) {
      console.error("AI description generation failed:", error);
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-generator" className="container">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          AI-Powered Content Creation
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Save time on writing. Let AI generate compelling descriptions for your 3D models based on a few details.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Generate a Model Description</CardTitle>
            <CardDescription>Fill in the details below to generate a description.</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="modelName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Ancient Golem" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="modelType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Character, Prop, Environment" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="modelDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model Details</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Describe key features, textures, poly count, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
        <Card className="min-h-[300px] flex items-center justify-center bg-muted/20">
          <CardContent className="p-6">
            {isLoading && (
              <div className="flex flex-col items-center text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-4">Generating description...</p>
              </div>
            )}
            {!isLoading && !generatedDescription && (
              <p className="text-center text-muted-foreground">
                Your generated description will appear here.
              </p>
            )}
            {generatedDescription && <p className="text-foreground leading-relaxed">{generatedDescription}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
