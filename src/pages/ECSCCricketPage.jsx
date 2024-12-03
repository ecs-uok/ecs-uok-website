import { Helmet } from "react-helmet-async";
//import Scoreboard from "../components/Scoreboard";

export default function ECSCCricketPage() {
  return (
    <div className="bg-gray-100 pt-20 ">
      <Helmet>
        <title>Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Stay updated with our tech-related activities and events."
        />
        <link rel="canonical" href="/ecsc-cricket-livescore" />
      </Helmet>

      <div>
        <div>
          {/*<Scoreboard />*/}
        </div>
        <div></div>
      </div>
    </div>
  );
}
