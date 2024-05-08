export type CreditScore = {
  value: number;
  category: "fair" | "good" | "excellent" | "poor" | "very poor";
};

export type Invoice = {
  paid_date: Date;
  due_date: Date;
  status: "PAID" | "UNPAID";
};

export type CreditReport = {
  paymentHistory: Invoice[];
  creditUtilisationPercentage: number; // percentage 0.2, 0.5
};
