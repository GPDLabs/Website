import { Features } from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div id="home" className="w-full">
      <Hero />
      <Features />
    </div>
  );
}
