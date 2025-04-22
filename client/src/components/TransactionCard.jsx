import axios from "axios";

const TransactionCard = ({ transaction, onDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/transactions/${transaction.id}`);
      onDeleted(transaction.id);
    } catch (error) {
      console.error("Failed to delete transaction:", error);
    }
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-md mb-3 flex justify-between items-center ${
        transaction.type === "income" ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <div>
        <h3 className="font-semibold">{transaction.category}</h3>
        <p className="text-sm text-gray-500">
          {new Date(transaction.date).toLocaleDateString()}
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold text-lg">
          {transaction.type === "income" ? "+" : "-"} Rp
          {parseFloat(transaction.amount).toLocaleString()}
        </p>
        <button
          onClick={handleDelete}
          className="mt-1 text-xs text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;

  