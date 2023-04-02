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
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  NextPage, InferGetStaticPropsType
} from "next";
import { muscleIndividual } from "@/types/muscleGroup";
import { MuscleGroup } from "@prisma/client";
import ExcerciseCard from "@/components/list/excercise-card";
import ChartSection from "@/components/chart";
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
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ muscleGroup }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
  return (
    <>
      <div className="bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl text-slate-100 font-semibold text-center ">
            {muscle}
          </h1>
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {landmarks.map((landmark) => (
              <VolumeCard key={landmark.name} muscle={landmark}></VolumeCard>
            ))}
          </ul>
          <div className="max-w-3xl mx-auto">
            <div className="">
              <ChartSection muscleGroup={muscleGroup} />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-slate-300 text-3xl font-semibold ">
              Recommended excercises
            </h2>
            <div className="grid grid-cols-12 justify-center gap-4 mt-10">
              {excercises.map((excercise: any) => (
                <ExcerciseCard excercise={excercise} key={excercise.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  const muscles = await prisma.muscleGroup.findMany({
    select: {
      muscle: true
    }
  });

  const paths = muscles.map((muscle) => {
    return {
      params: {
        muscle: muscle.muscle,
      },
    };
  });
  return { paths, fallback: false };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { muscle } = context.params as { muscle: string };

  const muscleGroup = await prisma.muscleGroup.findUnique({
    where: {
      muscle: muscle,
    },
    include: {
      images: true,
      excercises: true,
    },
  });


  return {
    props: {
      muscleGroup,
    },
  };
};


export default MuscleInfo;
