import { expect, test } from "vitest";
import { getCreditScore } from "./credit-score-me";
import { Invoice } from "./credit-score-me";

test.only("returns excellent if utilisation is 0", () => {
  expect(getCreditScore({ paymentHistory: [], creditUtilisation: 0 })).toEqual({
    category: "excellent",
    value: 900,
  });
});

test("returns very poor if all payment is overdue", () => {
  const paymentHistory: Invoice[] = [
    { status: "UNPAID", due_date: new Date("2024-03-10") },
  ];

  expect(getCreditScore({ paymentHistory, creditUtilisation: 0 })).toEqual({
    category: "very poor",
    value: 450,
  });
});
