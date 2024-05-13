import { CreditReport, CreditScore } from "./types";

/**
 *
 * @param creditReport the credit report for a user
 * @returns
 * - 900 if credit utilisation percentage is less than 0.3
 * - 700 if credit utilisation percentage is between 0.3 and 0.5
 * - 600 if credit utilisation percentage is between 0.5 and 0.7
 * - 500 if credit utilisation percentage is between 0.7 and 0.9
 * - 400 if credit utilisation percentage is greater than 0.9
 */
export const getCreditScore = (creditReport: CreditReport): CreditScore => {
  const creditUtilisation = creditReport.creditUtilisationPercentage;

  if (creditUtilisation > 0.3 && creditUtilisation <= 0.5) {
    return {
      value: 960,
      category: "good",
    };
  } else if (creditUtilisation > 0.5 && creditUtilisation <= 0.7) {
    return {
      value: 880,
      category: "fair",
    };
  } else if (creditUtilisation > 0.7 && creditUtilisation <= 0.9) {
    return {
      value: 720,
      category: "poor",
    };
  } else if (creditUtilisation > 0.9) {
    return {
      value: 560,
      category: "very poor",
    };
  }

  return {
    value: 999,
    category: "excellent",
  };
};

/**
 * @param value  value to calculate percentage
 * @param total total value
 * @returns percentage with 2 decimal places. E.g. 0.25
 */
const calculatePercentage = (value: number, total: number) => {
  return Math.round((value / total) * 100) / 100;
};
