import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="container py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Let's Collaborate
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Have a project in mind or just want to say hi? Drop me a line.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto mt-12 bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline">Contact Me</CardTitle>
          <CardDescription>I'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
}
