import Link from "next/link";
import Image from "next/image";
import { muscleIndividual } from "@/types/muscleGroup";
const MuscleCard: React.FC<{ muscle: muscleIndividual }> = ({ muscle }) => {
	const { description } = muscle;
	let url = "";
	if (muscle?.images) {
		url = muscle?.images[0].path || "N/A";
	} else {
		url = "https://placeimg.com/400/225/arch";
	}
	return (
		<div className="col-span-12 md:col-span-4 h-full  border-slate-800 border">
			<Link href={`/muscle/${muscle.muscle}`}>
				<a>
					{" "}
					<div className="card card-compact w-96  rounded-lg hover:shadow-md  hover:bg-slate-800  h-full">
						<figure>
							<Image
								src={url}
								alt={muscle.muscle}
								priority
								layout="intrinsic"
								width="400"
								height="255"
							/>
						</figure>
						<div className="card-body">
							<h2 className="text-2xl font-semibold text-slate-100">
								{muscle.muscle}
							</h2>
							<p className="text-slate-300">{description}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default MuscleCard;
