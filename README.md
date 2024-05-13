## Running the project

You'll need NodeJS v18.

- `npm install`
- `npm test` should run the tests
- `npm run dev` should run the main file

## Context

This project contains a first version of a function that calculates a credit score given a credit report.

**Credit score:** A credit score is a prediction of a person's credit behavior, such as how likely you are to pay a loan back on time, based on information from your credit reports.

In the UK, Experian's credit score ranges are:

- "very poor" if the score is less or equals 560.
- "poor" if the score is between 561 and 720.
- "fair" if the score is between 721 and 880.
- "good" if the score is between 881 and 960.
- "excellent" if the score is between 961 and 999.

**Credit report:** consists of a person's credit utilisation percentage and payment history.

- Credit utilisation percentage: Credit utilization percentage shows how much of your available credit you're using. It refers to the ratio of your credit card balance to your credit limit.
- Payment history: is a list of invoices that the person needs to pay.

## Before the interview

- Make sure you can run the project locally (`npm test` should run the tests in watch mode).
- Get familiar with the existing code.
- Don't write any code.

During the interview, we'll ask you to expand the current implementation of the credit score function and update tests accordingly. You'll have around 35 minutes for this.

#### Good to know...

- At OakNorth we do TDD (test driven development)
- We don't test implementation details
- Previous Typescript knowledge isn't required but, since our codebase is in Typescript, we expect you to be able to contribute to this existing code.

## Task

To be given during the interview.
