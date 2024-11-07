"use client";

import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

export const TRANSACTION_CATEGORY_LABEL = {
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

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência",
  BANK_SLIP: "Boleto",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABEL[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABEL[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PencilIcon />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];

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
