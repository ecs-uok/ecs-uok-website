import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";

const TeamLogo = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageRef = ref(storage, `teamLogos/${imagePath}.webp`);

    getDownloadURL(imageRef)
      .then((url) => setImageUrl(url))
      .catch((error) =>
        console.error("Error while getting team logo: ", error)
      );
  }, [imagePath]);

  return (
    <div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${imagePath} logo }`}
          className="h-40 w-h-40"
        />
      )}
    </div>
  );
};

function Scoreboard() {
  const [teamDetails, setTeamDetails] = useState([]);
  const {
    teamName: firstTeamName,
    teamScore: firstTeamScore,
    teamWickets: firstTeamWickets,
    teamBalls: firstTeamBalls,
  } = teamDetails[0] || {};
  const {
    teamName: secondTeamName,
    teamScore: secondTeamScore,
    teamWickets: secondTeamWickets,
    teamBalls: secondTeamBalls,
  } = teamDetails[1] || {};

  const getTeamList = async () => {
    try {
      const team1Ref = doc(db, "teamDetails", "team1Details");
      const team2Ref = doc(db, "teamDetails", "team2Details");

      const team1DocSnap = await getDoc(team1Ref);
      const team2DocSnap = await getDoc(team2Ref);

      const team1Data = team1DocSnap.exists() ? team1DocSnap.data() : null;
      const team2Data = team2DocSnap.exists() ? team2DocSnap.data() : null;

      setTeamDetails([team1Data, team2Data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeamList();
    const intervalId = setInterval(() => {
      getTeamList();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-gray-200 p-4 md:w-1/3 mx-auto md:my-4">
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <div className="flex items-center md:gap-8 gap-24">
          <div className="flex flex-col items-center">
            <TeamLogo imagePath={"falcons"} />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl">
              {firstTeamScore}/{firstTeamWickets}
            </p>
            <p className="font-medium text-base">
              ({firstTeamBalls}/{100})
            </p>
          </div>
        </div>

        <div className="flex items-center md:gap-8 gap-24">
          <div className="flex flex-col items-center">
            <TeamLogo imagePath={"thunder_strikers"} />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl">
              {secondTeamScore}/{secondTeamWickets}
            </p>
            <p className="font-medium text-base">
              ({secondTeamBalls}/{100})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
