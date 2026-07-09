import type { UserAgeType } from "../types/user";

export function getAgeType(age: number): UserAgeType {
  if (!Number.isFinite(age) || age < 0) {
    return "maloy";
  }

  if (age <= 12) {
    return "maloy";
  }

  if (age <= 17) {
    return "pedrostok";
  }

  if (age <= 29) {
    return "seredinochka";
  }

  if (age <= 49) {
    return "pensiya";
  }

  if (age <= 69) {
    return "ded perdun";
  }

  if (age <= 99) {
    return "stariy izvrashenets";
  }

  if (age <= 129) {
    return "espenis bala";
  }

  if (age <= 159) {
    return "bagamot";
  }

  if (age <= 199) {
    return "sigma ded";
  }

  if (age <= 499) {
    return "kak tiy eshe giv";
  }

  return "ultimate boss";
}
