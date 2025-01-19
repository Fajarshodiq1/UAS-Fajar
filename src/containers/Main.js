import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";
import { addTransaction, deleteTransaction } from "../redux/actions";

const Main = () => {
  // Mengambil state dari Redux store
  const transactions = useSelector((state) => state.transactions);

  // Menginisialisasi dispatch untuk mengirim action ke Redux
  const dispatch = useDispatch();

  // Fungsi untuk menambahkan transaksi
  const handleAddTransaction = (transaction) => {
    dispatch(addTransaction(transaction));
  };

  // Fungsi untuk menghapus transaksi
  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className="container">
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={handleDeleteTransaction}
      />
      <AddTransactions
        addTransaction={handleAddTransaction}
        id={transactions[0] ? transactions[0].id + 1 : 1}
      />
    </div>
  );
};

export default Main;
