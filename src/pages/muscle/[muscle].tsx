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
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { muscleIndividual } from "@/types/muscleGroup";
import { MuscleGroup } from "@prisma/client";
import ExcerciseCard from "@/components/list/excercise-card";
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

const MuscleInfo: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ muscleGroup }) => {
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
    excercises,
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
        <div className="flex">
          <div className="lg:w-1/2">
            <Line data={data} options={options} />
          </div>
          <div>
            <h2>Frequency</h2>
            <p>{frequency} times a week</p>
          </div>
        </div>
        <div>
          <h2>Recommended excercises</h2>
          <div className="grid grid-cols-12 justify-center lg:grid-cols-4">
            {excercises.map((excercise: any) => (
              <ExcerciseCard excercise={excercise} key={excercise.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { muscle } = context.query;

  const muscleGroup: any = await prisma.muscleGroup.findUnique({
    where: {
      muscle: muscle,
    },
    include: {
      images: true,
      excercises: true,
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
