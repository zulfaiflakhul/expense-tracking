import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ transactions, type }) => {
  const filtered = transactions.filter((t) => t.type === type);
  const grouped = filtered.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + parseFloat(curr.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(grouped),
    datasets: [
      {
        label: 'Jumlah (Rp)',
        data: Object.values(grouped),
        backgroundColor: [
          '#60a5fa', '#34d399', '#facc15', '#f87171', '#a78bfa', '#f472b6'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h2 className="text-center font-semibold mb-2">
        Diagram {type === 'income' ? 'Income' : 'Expense'}
      </h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;