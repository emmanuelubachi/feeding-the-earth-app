import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
      <p className="mt-4 text-lg">Welcome to your Next.js app.</p>
      <p className="mt-4 text-lg">
        This is a simple example of a Next.js application.
      </p>
      <Button>Click me</Button>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
