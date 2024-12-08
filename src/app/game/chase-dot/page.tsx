import { ChaseTheDot } from "@/components/chase-the-dot";

export const metadata = {
  title: "Chase The Dot - Game",
  description: "A fun interactive game where you chase the red dot!",
};

export default function ChaseDotGamePage() {
  return (
    <main>
      <ChaseTheDot />
    </main>
  );
}
