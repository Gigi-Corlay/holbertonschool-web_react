// Interfaces
export interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}

// Sum Major Credits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

// Sum Minor Credits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}
