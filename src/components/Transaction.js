import React from "react";

export default function Transaction({ transaction, deleteTransaction }) {
  // Format angka menjadi format Rupiah
  const formatRupiah = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);

  let sign = transaction.amount >= 0 ? "+" : "-";

  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        <span style={{ marginRight: 8 }}>{transaction.date}</span>
        {sign} {formatRupiah(Math.abs(transaction.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
}
