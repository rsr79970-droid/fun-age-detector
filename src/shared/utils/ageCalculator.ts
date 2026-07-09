import type { UserAgeType } from "../types/user";

export function getAgeType(age: number): UserAgeType {
  if (!Number.isFinite(age) || age < 0) {
    return "maloy";
  }

  if (age <= 10) {
    return "maloy";
  }

  if (age <= 18) {
    return "pedrostok";
  }

  if (age <= 30) {
    return "seredinochka";
  }

  if (age <= 45) {
    return "pensiya";
  }

  if (age <= 60) {
    return "ded perdun";
  }

  if (age <= 90) {
    return "stariy izvrashenets";
  }

  if (age <= 120) {
    return "espenis bala";
  }

  if (age <= 150) {
    return "bagamot";
  }

  if (age <= 200) {
    return "sigma ded";
  }

  return "ultimate boss";
}
