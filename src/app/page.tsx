import AiGenerator from '@/components/ai-generator';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <div className="container">
          <Separator className="my-16 sm:my-24" />
        </div>
        <AiGenerator />
        <div className="container">
          <Separator className="my-16 sm:my-24" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
