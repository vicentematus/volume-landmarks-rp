import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
const MuscleCard: any = ({ muscle }) => {
  const { images } = muscle;
  let url: string = "";

  if (images[0]) {
    url = images[0].path;
  } else {
    url = "https://placeimg.com/400/225/arch";
  }
  return (
    <div className="col-span-12 md:col-span-4">
      <Link href={`/muscle/${muscle.muscle}`}>
        <a>
          {" "}
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src={url} layout="intrinsic" width="400" height="255" />
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
