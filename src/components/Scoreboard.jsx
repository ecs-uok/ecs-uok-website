import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import RedDot from "./animations/RedDot";

const TeamLogo = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const formattedPath = imagePath.replace(/\s+/g, "_");
        const imageRef = ref(storage, `teamLogos/${formattedPath}`);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching team logo:", error);
      }
    };

    fetchImage();
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
  const [matchData, setMatchData] = useState([]);
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
      const matchRef = doc(db, "matchState", "nowMatchState");

      const team1DocSnap = await getDoc(team1Ref);
      const team2DocSnap = await getDoc(team2Ref);
      const matchDocSnap = await getDoc(matchRef);

      const team1Data = team1DocSnap.exists() ? team1DocSnap.data() : null;
      const team2Data = team2DocSnap.exists() ? team2DocSnap.data() : null;
      const matchData = matchDocSnap.exists() ? matchDocSnap.data() : null;

      setTeamDetails([team1Data, team2Data]);
      setMatchData(matchData);
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
    <>
      <div className="bg-primary w-full py-6 md:py-12 px-10 md:px-48 transition-all duration-1000">
        <div className="flex flex-col text-white">
          <span className="text-white text-2xl md:text-4xl">
            ECSC Challenge Trophy
          </span>
          <div className="flex items-center -ml-2 mt-1">
            <RedDot />
            <p className="text-lg ml-2">Live Score</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4 md:w-1/3 mx-auto md:my-4">
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <h1 className="text-xl font-semibold my-2 uppercase">
            {firstTeamName} <span className="capitalize">Vs. </span>
            {secondTeamName}
          </h1>
          <p className="mb-4">{matchData.matchNumber}</p>
          <div className="flex items-center md:gap-8 gap-24">
            <div className="flex flex-col items-center">
              <TeamLogo imagePath={firstTeamName} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">
                {firstTeamScore}/{firstTeamWickets}
              </p>
              <p className="font-medium text-base">
                ({firstTeamBalls}/{matchData.totalBalls})
              </p>
            </div>
          </div>

          <div className="flex items-center md:gap-8 gap-24">
            <div className="flex flex-col items-center">
              <TeamLogo imagePath={secondTeamName} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">
                {secondTeamScore}/{secondTeamWickets}
              </p>
              <p className="font-medium text-base">
                ({secondTeamBalls}/{matchData.totalBalls})
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
TeamLogo.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default Scoreboard;
