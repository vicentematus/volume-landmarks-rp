import Link from "next/link";
import Image from "next/image";
import { muscleIndividual } from "@/types/muscleGroup";
const MuscleCard: React.FC<{ muscle: muscleIndividual }> = ({ muscle }) => {
  const { images, description } = muscle;
  let url: string = "";
  console.log("muscle es ", muscle);
  if (images[0]) {
    url = images[0].path;
  } else {
    url = "https://placeimg.com/400/225/arch";
  }
  return (
    <div className="col-span-12 md:col-span-4 h-full ">
      <Link href={`/muscle/${muscle.muscle}`}>
        <a>
          {" "}
          <div className="card card-compact w-96  hover:shadow-md bg-base-100 shadow-xl h-full">
            <figure>
              <Image src={url} layout="intrinsic" width="400" height="255" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{muscle.muscle}</h2>
              <p>{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default MuscleCard;
