// const getCreditUtilisation = (creditLimit: number, balance: number) => {
//     return balance / creditLimit;
// }

export type CreditScore = {
  value: number; // 0 - 999
  category: "fair" | "good" | "excellent" | "poor" | "very poor";
};

type Invoice = {
  paid_date: Date;
  due_date: Date;
  status: "PAID" | "UNPAID";
};

// length of credit history accounts for credit score too

/**
 a high % of overdue payments reduce credit score
 * (0.8 - 1) overdue then reduce credit score by 50%
 * (0.4 - 0.8) overdue then reduce credit score by 25%
 * (0.2 - 0.4) overdue then reduce credit score by 10% (optional)
 */

type CreditReport = {
  paymentHistory: Invoice[];
  creditUtilisation: number; // percentage 0.2, 0.5
};

/**
 * @param invoice
 * @returns true if it's not paid and due date is in the past
 */
const isOverdue = (invoice: Invoice) => {
  return invoice.status === "UNPAID" && invoice.due_date < new Date();
};

/**
 * @param value  value to calculate percentage
 * @param total total value
 * @returns percentage with 2 decimal places. E.g. 0.25
 */
const calculatePercentage = (value: number, total: number) => {
  return Math.round((value / total) * 100) / 100;
};

const getCreditScore = (creditReport: CreditReport): CreditScore => {
  const creditUtilisation = creditReport.creditUtilisation;

  if (creditUtilisation > 0.3 && creditUtilisation <= 0.5) {
    return {
      value: 700,
      category: "good",
    };
  } else if (creditUtilisation > 0.5 && creditUtilisation <= 0.7) {
    return {
      value: 600,
      category: "fair",
    };
  } else if (creditUtilisation > 0.7 && creditUtilisation <= 0.9) {
    return {
      value: 500,
      category: "poor",
    };
  } else if (creditUtilisation > 0.9) {
    return {
      value: 300,
      category: "very poor",
    };
  }

  return {
    value: 900,
    category: "excellent",
  };
};
