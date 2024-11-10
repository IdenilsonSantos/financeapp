import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: "Habitação",
  TRANSPORTATION: "Transporte",
  FOOD: "Comida",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  EDUCATION: "Educação",
  OTHER: "Outros",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência",
  BANK_SLIP: "Boleto",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  { value: TransactionPaymentMethod.BANK_SLIP, label: "Boleto" },
  { value: TransactionPaymentMethod.BANK_TRANSFER, label: "Transferência" },
  { value: TransactionPaymentMethod.CASH, label: "Dinheiro" },
  { value: TransactionPaymentMethod.CREDIT_CARD, label: "Cartão de Crédito" },
  { value: TransactionPaymentMethod.DEBIT_CARD, label: "Cartão de Débito" },
  { value: TransactionPaymentMethod.PIX, label: "Pix" },
  { value: TransactionPaymentMethod.OTHER, label: "Outros" },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  { value: TransactionCategory.HOUSING, label: "Habitação" },
  { value: TransactionCategory.TRANSPORTATION, label: "Transporte" },
  { value: TransactionCategory.FOOD, label: "Comida" },
  { value: TransactionCategory.ENTERTAINMENT, label: "Entretenimento" },
  { value: TransactionCategory.HEALTH, label: "Saúde" },
  { value: TransactionCategory.UTILITY, label: "Utilidades" },
  { value: TransactionCategory.SALARY, label: "Salário" },
  { value: TransactionCategory.EDUCATION, label: "Educação" },
  { value: TransactionCategory.OTHER, label: "Outros" },
];
