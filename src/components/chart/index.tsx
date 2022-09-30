import { average } from "@/utils/calculations";
import { MuscleGroup } from "@prisma/client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { muscleIndividual } from "@/types/muscleGroup";
const labels = ["MV", "MEV", "MAV", "MRV"];
const ChartSection: React.FC<{ muscleGroup: MuscleGroup }> = ({
  muscleGroup,
}) => {
  const {
    MV_MIN,
    MV_MAX,
    MEV_MIN,
    MEV_MAX,
    MAV_MIN,
    MAV_MAX,
    MRV_MIN,
    MRV_MAX,
    muscle,
  } = muscleGroup;
  const landmarks = [
    {
      name: "MV",
      range: [MV_MIN, MV_MAX],
      bgColor: "bg-pink-600",
      legend: " Maintenance Volume",
    },

    {
      name: "MEV",
      range: [MEV_MIN, MEV_MAX],

      legend: "Minimum Effective Volume",
      bgColor: "bg-purple-600",
    },
    {
      name: "MAV",
      range: [MAV_MIN, MAV_MAX],

      legend: "Maximum Adaptive Volume",
      bgColor: "bg-yellow-600",
    },
    {
      name: "MRV",
      range: [MRV_MIN, MRV_MAX],

      legend: "Maximum Recoverable Volume",
      bgColor: "bg-green-600",
    },
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${muscle} Line Chart`,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: `${muscle} volume landmarks`,
        data: [
          average(MV_MIN, MV_MAX),
          average(MEV_MIN, MEV_MAX),
          average(MAV_MIN, MAV_MAX),
          average(MRV_MIN, MRV_MAX),
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default ChartSection;
