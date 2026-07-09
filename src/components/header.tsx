import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-violet-400" />

        <span>Fun Age Calculator</span>
      </div>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        Discover{" "}
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Who You Are
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Enter your name and age to discover your funny age category, personality
        title, and unique description.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <div className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          🎭 11 Categories
        </div>

        <div className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          ⚡ Instant Result
        </div>

        <div className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          🎉 Just for Fun
        </div>
      </div>
    </header>
  );
}
