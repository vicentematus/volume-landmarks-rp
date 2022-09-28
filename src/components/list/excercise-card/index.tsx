import Avatar from "boring-avatars";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { Excercise } from "@prisma/client";
const ExcerciseCard = ({ excercise }: any) => {
  function extractVideoID(url: any) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
      return match[7];
    } else {
      console.log("Could not extract video ID.");
    }
  }
  const closeModal = () => {
    console.log("Estoy cerrando el modal");
  };

  extractVideoID(excercise?.url);
  return (
    <div>
      <Avatar size={40} variant="pixel" />
      <p>{excercise?.name}</p>
      <div>
        <LiteYouTubeEmbed
          id={extractVideoID(excercise?.url)}
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
    </div>
  );
};

export default ExcerciseCard;
