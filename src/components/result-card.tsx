import {
  Check,
  ShieldAlert,
  Sparkles,
  User,
  Cake,
  BadgeInfo,
} from "lucide-react";

import { AGE_TYPES } from "../shared/types/age-types";
import type { User as UserType } from "../shared/types/user";

import { Button } from "../shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared/ui/card";

import { cn } from "../shared/lib/cn";

interface ResultCardProps {
  user: UserType;
  onReset: () => void;
}

export function ResultCard({ user, onReset }: ResultCardProps) {
  const category = AGE_TYPES[user.ageType];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="items-center text-center">
        <div
          className={cn(
            "flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br text-7xl shadow-xl",
            category.gradient,
          )}
        >
          {category.emoji}
        </div>

        <CardTitle className="mt-6 text-4xl">{category.title}</CardTitle>

        <CardDescription className="mt-3 max-w-xl">
          {category.quote}
        </CardDescription>

        <div className="mt-6 inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium">
          ⭐ {category.rarity}
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Power */}

        <div>
          <div className="mb-3 flex justify-between">
            <span className="font-medium text-zinc-400">Power Level</span>

            <span className="font-semibold">{category.powerLevel}/100</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div
              className={cn(
                "h-full rounded-full bg-gradient-to-r transition-all duration-700",
                category.gradient,
              )}
              style={{
                width: `${Math.min(category.powerLevel, 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Grid */}

        <div className="grid gap-6 xl:grid-cols-2">
          {/* About */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Sparkles size={18} />
              About
            </h3>

            <p className="leading-8 text-zinc-300">{category.description}</p>
          </div>

          {/* User */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="mb-5 text-lg font-semibold">Your Information</h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-zinc-500">
                  <User size={16} />
                  Name
                </span>

                <span>{user.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-zinc-500">
                  <Cake size={16} />
                  Age
                </span>

                <span>{user.age}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-zinc-500">
                  <BadgeInfo size={16} />
                  Category
                </span>

                <span>{category.title}</span>
              </div>
            </div>
          </div>

          {/* Strengths */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="mb-5 text-lg font-semibold">💪 Strengths</h3>

            <div className="space-y-3">
              {category.strengths.map((strength) => (
                <div key={strength} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-400" />

                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weaknesses */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="mb-5 text-lg font-semibold">⚠ Weaknesses</h3>

            <div className="space-y-3">
              {category.weaknesses.map((weakness) => (
                <div key={weakness} className="flex items-center gap-3">
                  <ShieldAlert className="h-4 w-4 text-orange-400" />

                  <span>{weakness}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 xl:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">😂 Fun Fact</h3>

            <p className="leading-8 text-zinc-300">{category.funFact}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button size="lg" className="w-full" onClick={onReset}>
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
}
