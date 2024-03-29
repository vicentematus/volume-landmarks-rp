import Avatar from "boring-avatars";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { extractVideoID } from "@/utils/excercise";
const ExcerciseCard = ({ excercise }: any) => {
  extractVideoID(excercise?.url);
  return (
    <div className="col-span-12 md:col-span-3 ">
      <div className="flex items-center gap-x-2 ">
        <div>
          <Avatar size={40} variant="pixel" />
        </div>

        <p className="font-semibold text-slate-200">{excercise?.name}</p>
      </div>

      <div>
        <LiteYouTubeEmbed
          id={String(extractVideoID(excercise?.url))}
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
    </div>
  );
};

export default ExcerciseCard;
