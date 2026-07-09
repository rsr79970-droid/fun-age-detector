import { useState, type FormEvent } from "react";
import { User, Calendar, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared/ui/card";

import { Button } from "../shared/ui/button";
import { Input } from "../shared/ui/input";
import { Label } from "../shared/ui/label";

interface AgeFormProps {
  onSubmit: (name: string, age: number) => void;
}

export function AgeForm({ onSubmit }: AgeFormProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = name.trim();
    const ageNumber = Number(age);

    if (!trimmedName) return;
    if (!Number.isFinite(ageNumber) || ageNumber < 0) return;

    onSubmit(trimmedName, ageNumber);

    setName("");
    setAge("");
  }

  return (
    <Card className="flex min-h-[620px] flex-col">
      <form onSubmit={handleSubmit} className="flex h-full flex-col">
        <CardHeader>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg">
            <Sparkles className="h-7 w-7 text-white" />
          </div>

          <CardTitle>Discover Yourself</CardTitle>

          <CardDescription>
            Fill in the fields below and instantly receive your funny age
            category.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-8">
          <div className="space-y-3">
            <Label htmlFor="name">Your Name</Label>

            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <Input
                id="name"
                className="h-14 rounded-xl pl-12"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="age">Your Age</Label>

            <div className="relative">
              <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <Input
                id="age"
                type="number"
                className="h-14 rounded-xl pl-12"
                placeholder="18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-400">
              💡 Enter any age and we'll assign a fun category with its own
              title, emoji, and description.
            </p>
          </div>
        </CardContent>

        <CardFooter className="mt-auto">
          <Button
            type="submit"
            size="lg"
            className="h-14 w-full rounded-xl text-base"
          >
            Discover →
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
