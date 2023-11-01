import Image from "next/image";

// components
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-8">
      <Nav />
      <section className="py-24 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl font-bold">Chadcn is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
          necessitatibus.
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Button>Click Me 😉</Button>
        <Button>Learn Now</Button>
      </div>
    </main>
  );
}
