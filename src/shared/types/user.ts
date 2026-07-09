export type UserAgeType =
  | "maloy"
  | "pedrostok"
  | "seredinochka"
  | "pensiya"
  | "ded perdun"
  | "stariy izvrashenets"
  | "kak tiy eshe giv"
  | "espenis bala"
  | "bagamot"
  | "sigma ded"
  | "ultimate boss";

export interface User {
  id: string;
  name: string;
  age: number;
  ageType: UserAgeType;
  createdAt: Date;
}

export interface AgeType {
  title: string;
  emoji: string;
  color: string;
  gradient: string;
  quote: string;
  description: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  powerLevel: number;
  origin: string;
  strengths: string[];
  weaknesses: string[];
  hobbies: string[];
  achievement: string;
  lifeGoal: string;
  funFact: string;
  warning: string;
  themeSong: string;
}
