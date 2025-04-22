import { useEffect, useState } from 'react';
import api from './services/api';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Chart from './components/Chart';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await api.get('/transactions');
      setTransactions(res.data);
    } catch (err) {
      console.error('Failed to fetch transactions:', err);
    }
  };

  const addTransaction = async (form) => {
    try {
      await api.post('/transactions', form);
      fetchTransactions();
    } catch (err) {
      console.error('Failed to add transaction:', err);
    }
  };

  const handleDeleted = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Aplikasi Keuangan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="col-span-1">
          <TransactionForm onAdd={addTransaction} />
          <div className="mt-4 bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-2">Daftar Transaksi</h2>
            <TransactionList transactions={transactions} onDeleted={handleDeleted} />
          </div>
        </div>

        {/* Card 2 */}
        <Chart transactions={transactions} type="income" />

        {/* Card 3 */}
        <Chart transactions={transactions} type="expense" />
      </div>
    </div>
  );
}

export default App;
