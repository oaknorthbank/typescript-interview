import { expect, describe, it } from "vitest";
import { getCreditScore } from "./credit-score";

describe("getCreditScore", () => {
  it("should return 300 if the credit utilisation is more than 90%", () => {
    const creditReport = {
      paymentHistory: [],
      creditUtilisationPercentage: 0.95,
    };

    const creditScore = getCreditScore(creditReport);

    expect(creditScore.value).toBe(560);
    expect(creditScore.category).toBe("very poor");
  });

  it("should return 500 if the credit utilisation is between 70% and 90%", () => {
    const creditReport = {
      paymentHistory: [],
      creditUtilisationPercentage: 0.8,
    };
    const creditScore = getCreditScore(creditReport);
    expect(creditScore.value).toBe(720);
    expect(creditScore.category).toBe("poor");
  });

  it("should return 600 if the credit utilisation is between 50% and 70%", () => {
    const creditReport = {
      paymentHistory: [],
      creditUtilisationPercentage: 0.6,
    };
    const creditScore = getCreditScore(creditReport);
    expect(creditScore.value).toBe(880);
    expect(creditScore.category).toBe("fair");
  });

  it("should return 700 if the credit utilisation is between 30% and 50%", () => {
    const creditReport = {
      paymentHistory: [],
      creditUtilisationPercentage: 0.4,
    };
    const creditScore = getCreditScore(creditReport);
    expect(creditScore.value).toBe(960);
    expect(creditScore.category).toBe("good");
  });

  it("should return 900 if the credit utilisation is less than 30%", () => {
    const creditReport = {
      paymentHistory: [],
      creditUtilisationPercentage: 0.2,
    };
    const creditScore = getCreditScore(creditReport);
    expect(creditScore.value).toBe(999);
    expect(creditScore.category).toBe("excellent");
  });
});
