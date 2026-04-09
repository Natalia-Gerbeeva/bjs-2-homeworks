'use strict';

function solveEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    return [-b / (2 * a)];
  }

  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [x1, x2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentValue = Number(percent);
  const contributionValue = Number(contribution);
  const amountValue = Number(amount);
  const monthsValue = Number(countMonths);

  const bodyCredit = amountValue - contributionValue;
  const monthlyPercent = percentValue / 100 / 12;

  if (
    !percentValue ||
    !amountValue ||
    !monthsValue ||
    bodyCredit <= 0
  ) {
    return 0;
  }

  const monthlyPayment =
    bodyCredit *
    (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, monthsValue) - 1));

  return Number((monthlyPayment * monthsValue).toFixed(2));
}