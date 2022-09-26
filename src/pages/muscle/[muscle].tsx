import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { average } from "@/utils/calculations";
import { prisma } from "@/server/db/client";
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
import VolumeCard from "@/components/volume-landmarks/index";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["MV", "MEV", "MAV", "MRV"];

const MuscleInfo = ({ muscleGroup }) => {
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
    frequency,
    article,
  } = muscleGroup;
  console.log(MRV_MAX);

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
  console.log(
    "La informacion del musculo en el component es MuscleGroup",
    muscleGroup
  );
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-center">{muscle}</h1>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {landmarks.map((landmark) => (
            <VolumeCard key={landmark.name} muscle={landmark}></VolumeCard>
          ))}
        </ul>
        <div>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { muscle } = context.query;

  console.log("muscle es ", muscle);
  const muscleGroup = await prisma.muscleGroup.findUnique({
    where: {
      muscle: muscle,
    },
  });

  console.log("El musculo encontrado es ", muscleGroup);

  return {
    props: {
      muscleGroup,
    },
  };
};
export default MuscleInfo;
