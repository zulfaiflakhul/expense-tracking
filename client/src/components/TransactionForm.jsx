import { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    type: "income",
    category: "",
    amount: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.category || !form.amount || !form.date) return;
    onAdd(form);
    setForm({ type: "income", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-2">Tambah Transaksi</h2>
      <select
        className="p-2 rounded border"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        placeholder="Kategori"
        className="p-2 rounded border"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Jumlah (Rp)"
        className="p-2 rounded border"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />

      <input
        type="date"
        className="p-2 rounded border"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Tambah
      </button>
    </form>
  );
};

export default TransactionForm;