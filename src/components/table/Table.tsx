import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
interface muscleType {
  id: number;
  muscle: string;
  MV_MIN: number;
  MV_MAX: number;
  MEV_MIN: number;
  MEV_MAX: number;
  MAV_MIN: number;
  MAV_MAX: number;
  MRV_MIN: number;
  MRV_MAX: number;
  frequency: string;
  article_url: string;
  excercises: string[];
}
const Table: any = ({ muscleGroups }) => {
  console.log("Muscle groups es", muscleGroups);
  return (
    <>
      <div>
        {muscleGroups.map((muscle) => (
          <Link href={`/muscle/${muscle.muscle}`} key={muscle.id}>
            <a>
              <h2 className="text-3xl font-semibold">{muscle.muscle}</h2>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Table;
