import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";

const MuscleCard: any = ({ muscle }) => {
  console.log("Muscle groups es", muscle);
  return (
    <div className="col-span-12 md:col-span-4">
      <Link href={`/muscle/${muscle.muscle}`}>
        <a>
          {" "}
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{muscle.muscle}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default MuscleCard;
