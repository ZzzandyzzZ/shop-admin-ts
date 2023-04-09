import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { title } from 'process'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Chart({ className, chartData }) {
  return (
    <>
      <Bar
        className={className}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Category',
              font: {
                size: 20,
              },
            },
            legend: {
              display: true,
              position: 'right',
            },
          },
        }}
      />
    </>
  )
}
