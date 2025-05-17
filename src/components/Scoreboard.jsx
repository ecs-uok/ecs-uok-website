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
    <div className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${imagePath} logo`}
          className="object-contain w-full h-full rounded-lg"
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

      // Fetch all docs in parallel for faster performance
      const [team1DocSnap, team2DocSnap, matchDocSnap] = await Promise.all([
        getDoc(team1Ref),
        getDoc(team2Ref),
        getDoc(matchRef),
      ]);

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
      <div className="bg-primary w-full py-6 md:py-12 px-2 sm:px-4 md:px-48 transition-all duration-1000">
        <div className="flex flex-col text-white">
          <span className="text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-wide text-center">
            ECSC Challenge Trophy
          </span>
          <div className="flex items-center justify-center mt-1">
            <RedDot />
            <p className="text-base sm:text-lg ml-2">Live Score</p>
          </div>
        </div>
      </div>
      <div className="md:bg-gray-100 pt-8 pb-8 sm:pt-12 sm:pb-12 p-2 sm:p-4 w-full sm:w-11/12 md:w-2/3 mx-auto my-4 md:my-8 rounded-xl md:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          {/* Teams and Score */}
          <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            {/* First Team */}
            <div className="flex flex-col items-center flex-1">
              <TeamLogo imagePath={firstTeamName} />
              <h2 className="text-base sm:text-lg font-semibold mt-2 uppercase text-center">
                {firstTeamName}
              </h2>
              <p className="font-bold text-xl sm:text-2xl mt-1">
                {firstTeamScore}/{firstTeamWickets}
              </p>
              <p className="font-medium text-sm sm:text-base text-gray-600">
                ({firstTeamBalls}/{matchData.totalBalls})
              </p>
            </div>
            {/* VS and Match Number */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 my-4 md:my-0">
              <span className="text-xl sm:text-2xl font-bold text-primary mb-1">
                VS
              </span>
              <span className="text-xs text-gray-500 font-semibold">Match</span>
              <span className="text-base sm:text-lg font-bold text-gray-700">
                {matchData.matchNumber}
              </span>
            </div>
            {/* Second Team */}
            <div className="flex flex-col items-center flex-1">
              <TeamLogo imagePath={secondTeamName} />
              <h2 className="text-base sm:text-lg font-semibold mt-2 uppercase text-center">
                {secondTeamName}
              </h2>
              <p className="font-bold text-xl sm:text-2xl mt-1">
                {secondTeamScore}/{secondTeamWickets}
              </p>
              <p className="font-medium text-sm sm:text-base text-gray-600">
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
