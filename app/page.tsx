import HeroCard from "./components/HeroCard";

export default function Home() {
  return (
    <main className="viewport">
      <HeroCard />
      <footer>
        <span>Built autonomously · {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
