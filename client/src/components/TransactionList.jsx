import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions, onDeleted  }) => {
  return (
    <div className="mt-4">
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada transaksi</p>
      ) : (
        transactions.map((t) => <TransactionCard key={t.id} transaction={t} onDeleted={onDeleted} />)
      )}
    </div>
  );
};

export default TransactionList;