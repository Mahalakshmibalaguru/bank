// src/services/bankingService.js

const accounts = {
  'john@example.com': {
    balance: 5000,
    transactions: [
      { id: 1, description: 'Deposit', amount: 5000, date: '2023-09-20' }
    ],
  }
};

export const getAccountDetails = (email) => {
  return accounts[email] || null;
};

export const transferFunds = (email, amount) => {
  if (accounts[email]) {
    accounts[email].balance -= amount;
    accounts[email].transactions.push({
      id: accounts[email].transactions.length + 1,
      description: 'Transfer',
      amount: -amount,
      date: new Date().toISOString(),
    });
  }
};
