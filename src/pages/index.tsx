import MuscleCard from "@/components/list/muscle-groups/index";
import type {
  NextPage,
  GetStaticProps, InferGetStaticPropsType
} from "next";
import Head from "next/head";
import { prisma } from "../server/db/client";
import { muscleGroupWithImages, muscleIndividual } from "@/types/muscleGroup";
import Hero from "@/components/hero";
import FeatureSection from "@/components/feature-section";
const Home: NextPage<{
  muscleGroups: InferGetStaticPropsType<typeof getStaticProps>;
}> = ({ muscleGroups }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Volume Landmarks - Reinassance Periodization</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <FeatureSection />

      <div className="bg-slate-900">
        <main
          className="max-w-6xl bg-slate-900 mx-auto flex flex-col items-center justify-center min-h-screen p-4"
          id="muscles"
        >
          <div>
            <h2 className="inline bg-gradient-to-l from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Check the guides
            </h2>
          </div>

          <div className="grid grid-cols-12 justify-center items-center gap-4 mt-16">
            {muscleGroups.map((muscle: muscleIndividual) => (
              <MuscleCard key={muscle.id} muscle={muscle} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const muscleGroups: muscleGroupWithImages = await prisma.muscleGroup.findMany(
    {
      include: {
        images: true,
      },
    }
  );

  return {
    props: {
      muscleGroups,
    },
  };
};
export default Home;
