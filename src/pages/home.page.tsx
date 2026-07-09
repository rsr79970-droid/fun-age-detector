import { useState } from "react";
import { Sparkles } from "lucide-react";

import { Background } from "../components/background";
import { Header } from "../components/header";
import { AgeForm } from "../components/age-form";
import { ResultCard } from "../components/result-card";

import type { User } from "../shared/types/user";
import { getAgeType } from "../shared/utils/ageCalculator";

export function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  function handleSubmit(name: string, age: number) {
    setUser({
      id: crypto.randomUUID(),
      name,
      age,
      ageType: getAgeType(age),
      createdAt: new Date(),
    });
  }

  function handleReset() {
    setUser(null);
  }

  return (
    <>
      <Background />

      <main className="relative min-h-screen overflow-hidden px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <Header />

          <section className="mt-20 grid gap-8 xl:grid-cols-[440px_1fr]">
            <AgeForm onSubmit={handleSubmit} />

            {user ? (
              <ResultCard user={user} onReset={handleReset} />
            ) : (
              <div className="flex min-h-[620px] flex-col items-center justify-center rounded-3xl border border-zinc-800/70 bg-zinc-950/60 p-10 text-center shadow-2xl backdrop-blur-xl">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-xl">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>

                <h2 className="mt-8 text-4xl font-bold text-white">
                  Your Result
                </h2>

                <p className="mt-4 max-w-md text-lg leading-8 text-zinc-400">
                  Fill out the form on the left and instantly receive your funny
                  age category with a unique title, emoji and description.
                </p>

                <div className="mt-10 grid w-full max-w-md gap-4">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <p className="text-sm font-medium text-zinc-500">👤 Name</p>

                    <p className="mt-2 text-lg text-zinc-300">Waiting...</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <p className="text-sm font-medium text-zinc-500">🎂 Age</p>

                    <p className="mt-2 text-lg text-zinc-300">Waiting...</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <p className="text-sm font-medium text-zinc-500">
                      🏷️ Category
                    </p>

                    <p className="mt-2 text-lg text-zinc-300">Waiting...</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
